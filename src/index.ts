import { AdvanceBlinky } from "./blinky";
import { EspruinoHardwareDependency } from "./espruinoHardwareDependency";

const blinkly = new AdvanceBlinky(new EspruinoHardwareDependency());
blinkly.pin = 2;
blinkly.intervalCallback = (count: number) => {
  console.log(count);
  if (count > 10) {
    blinkly.stop();
  }
};
blinkly.init(3000);
