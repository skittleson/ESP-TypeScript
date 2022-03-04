/**
 * "Don't Mock What You Don't Own" - a simple pass through to Espruino
 */
export interface IEspruinoHardwareDependency {
  /**
   *
   * @param pin GPIO number
   * @param value bool value
   */
  esp_digitalWrite(pin: Number, value: boolean): void;

  /**
   *
   * @param callback - A Function or String to be executed
   * @param ms - The time between calls to the function (max 3153600000000 = 100 years
   * @returns An ID that can be passed to clearInterval
   */
  esp_setInterval(callback: Function, ms: number): number;

  esp_clearInterval(id: number): void;
}

export class EspruinoHardwareDependency implements IEspruinoHardwareDependency {
  esp_clearInterval(id: number) {
    // @ts-ignore
    clearInterval(id);
  }
  esp_digitalWrite(pin: Number, value: boolean) {
    // @ts-ignore
    digitalWrite(pin, value);
  }
  esp_setInterval(callback: Function, ms: number): number {
    // @ts-ignore
    return setInterval(callback, ms);
  }
}
