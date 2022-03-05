import { IEspruinoHardwareDependency } from "./espruinoHardwareDependency";

export class AdvanceBlinky {
  intervalId!: number;
  pin!: number;
  intervalCallback!: Function;
  private espruino: IEspruinoHardwareDependency;
  private toggleStatus: boolean = false;
  private count: number = 0;
  constructor(espruino: IEspruinoHardwareDependency) {
    this.espruino = espruino;
  }

  /**
   * Initialize a loop to toggle an led on/off
   * @param intervalMs time in milliseconds
   */
  init(intervalMs: number = 2000) {
    if (this.pin > 0) {
      const instance = this;
      // setInterval returns an id to cancel later (the nodejs/browser version is an object typically)
      this.intervalId = this.espruino.esp_setInterval(function () {
        instance.toggleState(instance);
      }, intervalMs);
    } else {
      throw Error("No pin defined");
    }
  }

  /**
   * Stop loop
   */
  stop() {
    this.espruino.esp_clearInterval(this.intervalId);
    this.intervalId = 0;
  }

  private toggleState(instance: AdvanceBlinky) {
    instance.toggleStatus = !instance.toggleStatus;
    instance.espruino.esp_digitalWrite(instance.pin, instance.toggleStatus);
    instance.count++;
    if (instance.intervalCallback instanceof Function) {
      instance.intervalCallback(instance.count);
    }
  }
}
