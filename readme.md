# ESP-TypeScript

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.4-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/skittleson" target="_blank">
    <img alt="Twitter: skittleson" src="https://img.shields.io/twitter/follow/skittleson.svg?style=social" />
  </a>
  <img alt="nycrc config on GitHub" src="https://img.shields.io/nycrc/skittleson/ESP-TypeScript">
</p>

> Transpile TypeScript to [Espruino](https://github.com/espruino/Espruino) flavor of JavaScript for ESP8266/ESP32 microcontrollers template project. Writing safe, maintainable, and testable code is the projects goal.

## Install

```sh
npm install
```

## Usage

Adjust port used in `package.json` then:

```sh
npm run-script transpile
```

Permanently save transpile code on device.

```sh
npm run-script commit
```

Monitor serial responses

```sh
npm run-script monitor
```

## Run tests

```sh
npm test
```

Code coverage in `coverage/index.html`

## Example

The simplest example in `blinky.ts`. Blink a LED.

```typescript
const BUILTIN_LED = 2;
export function blinkly(intervalMs: number = 2000, pin: number = BUILTIN_LED) {
  let toggleStatus = false;
  setInterval(function () {
    toggleStatus = !toggleStatus;
    digitalWrite(pin, toggleStatus);
  }, intervalMs);
}
```

More advance example using a class, properties, testing using mocks and type checking: `AdvanceBlinky` class in [advanceBlinky.ts](src/advanceBlinky.ts) with test at [test/blinky.spec.ts](test/blinky.spec.ts).

In depth documentation about [Espruino JavaScript API and flashing](https://www.espruino.com/Reference#software)

## Road map

- [x] Transpile TypeScript to Espruino flavor of JavaScript
- [x] Example usage of typed code
- [x] Short commands to build, upload, and monitor
- [x] Unit testing
- [x] Firmware guidance docs
- [ ] Integration testing

## Devices

[Firmware selections](http://www.espruino.com/Download)

[ESP8266](https://amzn.to/3vA67By)
[![Wemos D1 mini ESP8266](original.jpg)](https://amzn.to/3vA67By)

[ESP32](https://amzn.to/3Ml7Znx)
[![Wemos ESP32](esp32.jpg)](https://amzn.to/3Ml7Znx)

These devices are also know to work: [https://templates.blakadder.com/](https://templates.blakadder.com/)

## Author

👤 **Spencer Kittleson**

- Website: https://docodethatmatters.com
- Twitter: [@skittleson](https://twitter.com/skittleson)
- Github: [@skittleson](https://github.com/skittleson)
- LinkedIn: [@skittleson](https://linkedin.com/in/skittleson)

## Show your support

Give a ⭐️ if this project helped you!
