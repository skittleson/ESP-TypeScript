import {} from "mocha";
import assert from "assert";
import { AdvanceBlinky } from "../src/blinky";

describe("Blinky", () => {
  let blinkly: AdvanceBlinky;
  beforeEach(() => {
    blinkly = new AdvanceBlinky();
  });
  it("should allow pin set", () => {
    blinkly.pin = 2;
    assert.equal(blinkly.pin, 2);
  });
  it("should allow stop", () => {
    blinkly.pin = 2;
    blinkly.intervalId = 123;
    blinkly.stop();
    assert.equal(blinkly.intervalId, 0);
  });
});
