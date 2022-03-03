// All API Docs are here: https://www.espruino.com/Reference#software
// Append global types as needed.

/**
 *
 * @param pin GPIO number
 * @param value bool value
 */
declare function digitalWrite(pin: Number, value: boolean);

/**
 *
 * @param callback - A Function or String to be executed
 * @param ms - The time between calls to the function (max 3153600000000 = 100 years
 * @returns An ID that can be passed to clearInterval
 */
declare function setInterval(callback: Function, ms: number): number;

declare function clearInterval(id: number): void;

declare var LoopbackA: any;
declare var LoopbackB: any;
declare var USB: any;
