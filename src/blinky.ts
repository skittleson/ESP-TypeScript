const BUILTIN_LED = 2;
export function blinkly(intervalMs: number = 2000, pin: number = BUILTIN_LED) {
  let toggleStatus = false;
  setInterval(function () {
    toggleStatus = !toggleStatus;

    // @ts-ignore
    digitalWrite(pin, toggleStatus);
  }, intervalMs);
}
