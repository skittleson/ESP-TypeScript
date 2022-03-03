import { AdvanceBlinky } from "./blinky";

const blinkly = new AdvanceBlinky();
blinkly.pin = 2;
blinkly.intervalCallback = (count: number) => {
  console.log(count);
  if (count > 10) {
    blinkly.stop();
  }
};
blinkly.init(3000);
