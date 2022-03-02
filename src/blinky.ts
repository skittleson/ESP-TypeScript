const BUILTIN_LED = 2;
export function blinkly(intervalMs: number = 2000, pin: number = BUILTIN_LED) {
  let toggleStatus = false;
  setInterval(function () {
    toggleStatus = !toggleStatus;
    digitalWrite(pin, toggleStatus);
  }, intervalMs);
}

export class AdvanceBlinky {
  timer: NodeJS.Timer;
  pin: number;
  intervalCallback: Function;
  constructor() {
    this.pin = 0;
  }

  init(intervalMs: number = 2000) {
    if (this.pin != 0) {
      let toggleStatus = false;
      let count = 0;

      // in order to use instead a setInterval context, redeclare scope properties of class to internal scope.
      const pin = this.pin;
      const callback = this.intervalCallback;
      setInterval(function () {
        toggleStatus = !toggleStatus;
        digitalWrite(pin, toggleStatus);
        count++;
        if (callback instanceof Function) {
          callback(count);
        }
      }, intervalMs);
    } else {
      throw Error("No pin defined");
    }
  }
  clear() {

    // builtin to cancel setInterval
    clearInterval(1);
  }
}
