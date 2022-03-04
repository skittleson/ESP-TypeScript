const BUILTIN_LED = 2;
export function blinkly(intervalMs: number = 2000, pin: number = BUILTIN_LED) {
  let toggleStatus = false;
  setInterval(function () {
    toggleStatus = !toggleStatus;
    
    // @ts-ignore
    digitalWrite(pin, toggleStatus);
  }, intervalMs);
}

export class AdvanceBlinky {
  intervalId!: number;
  pin!: number;
  intervalCallback!: Function;

  /**
   * Initialize a loop to toggle an led on/off
   * @param intervalMs time in milliseconds
   */
  init(intervalMs: number = 2000) {
    if (this.pin != 0) {
      let toggleStatus = false;
      let count = 0;

      // in order to use these variables in setInterval context, redeclare scope properties of class to internal scope.
      const pin = this.pin;
      const callback = this.intervalCallback;

      // setInterval returns an id to cancel later (the nodejs/browser version is an object typically)
      // @ts-ignore
      this.intervalId = setInterval(function () {
        toggleStatus = !toggleStatus;
        
        // @ts-ignore
        digitalWrite(pin, toggleStatus);
        count++;
        if (callback instanceof Function) {
          callback(count);
        }
      }, intervalMs) as any;
    } else {
      throw Error("No pin defined");
    }
  }

  /**
   * Stop loop
   */
  stop() {

    // @ts-ignore
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }
}
