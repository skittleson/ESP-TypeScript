import {} from "mocha";
import { expect } from "chai";
import * as TypeMoq from "typemoq";
import { AdvanceBlinky } from "../src/blinky";
import { IEspruinoHardwareDependency } from "../src/espruinoHardwareDependency";

//See for mocking: https://github.com/florinn/typemoq

describe("Blinky", () => {
  let blinkly: AdvanceBlinky;
  let mock: TypeMoq.IMock<IEspruinoHardwareDependency>;
  beforeEach(() => {
    mock = TypeMoq.Mock.ofType<IEspruinoHardwareDependency>();
    blinkly = new AdvanceBlinky(mock.object);
  });
  it("should allow pin set", () => {
    blinkly.pin = 2;
    expect(blinkly.pin).to.be.equal(2);
  });
  it("should init", () => {
    blinkly.pin = 123;
    mock
      .setup((x) => x.esp_setInterval(TypeMoq.It.isAny(), TypeMoq.It.isAny()))
      .returns(() => 1234);
    blinkly.init();
    expect(blinkly.intervalId).to.eq(1234);
    mock.verify(
      (x) => x.esp_setInterval(TypeMoq.It.isAny(), 2000),
      TypeMoq.Times.once()
    );
  });
  it("should allow stop", () => {
    blinkly.pin = 2;
    blinkly.intervalId = 123;
    blinkly.stop();
    expect(blinkly.intervalId).to.be.equal(0);
    mock.verify((x) => x.esp_clearInterval(123), TypeMoq.Times.once());
  });
});
