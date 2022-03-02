import { AdvanceBlinky } from "./blinky";

// blinkly();
const blinkly = new AdvanceBlinky();
blinkly.pin = 2;
blinkly.intervalCallback = (count) => {
  console.log(count);
  if (count > 4) {
    blinkly.clear();
  }
};
blinkly.init(2100);
