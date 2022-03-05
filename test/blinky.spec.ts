import {} from "mocha";
import { assert, expect } from "chai";
import { spy } from "sinon";
import * as TypeMoq from "typemoq";
import { AdvanceBlinky } from "../src/advanceBlinky";
import { IEspruinoHardwareDependency } from "../src/espruinoHardwareDependency";

/**
 * See for mocking: https://github.com/florinn/typemoq
 */
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
  it("change default intervalms", () => {
    blinkly.pin = 2;
    blinkly.init(100);
    mock.verify(
      (x: IEspruinoHardwareDependency) =>
        x.esp_setInterval(TypeMoq.It.isAny(), 100),
      TypeMoq.Times.once()
    );
  });
  it("should throw on no pin", () => {
    assert.throws(
      () => {
        blinkly.init();
      },
      Error,
      "No pin defined"
    );
  });
  it("should init", () => {
    blinkly.pin = 123;
    mock
      .setup((x: IEspruinoHardwareDependency) =>
        x.esp_setInterval(TypeMoq.It.isAny(), TypeMoq.It.isAnyNumber())
      )
      .returns(() => 1234);
    blinkly.init();
    expect(blinkly.intervalId).to.eq(1234);
    mock.verify(
      (x: IEspruinoHardwareDependency) =>
        x.esp_setInterval(TypeMoq.It.isAny(), 2000),
      TypeMoq.Times.once()
    );
  });
  it("should stop", () => {
    blinkly.pin = 2;
    blinkly.intervalId = 123;
    blinkly.stop();
    expect(blinkly.intervalId).to.be.equal(0);
    mock.verify(
      (x: IEspruinoHardwareDependency) => x.esp_clearInterval(123),
      TypeMoq.Times.once()
    );
  });
  it("should execute repeat", () => {
    blinkly.pin = 2;
    let actualCount = 0;
    blinkly.intervalCallback = (count: number) => {
      actualCount = count;
    };
    mock.setup((x: IEspruinoHardwareDependency) =>
      x.esp_setInterval(
        TypeMoq.It.is<Function>((y) => y()),
        TypeMoq.It.isAnyNumber()
      )
    );
    var spyOn = spy(blinkly, "intervalCallback");
    blinkly.init();
    expect(actualCount).to.be.eq(2);
    expect(spyOn.callCount).to.be.eq(2);
  });
});
