<h1 align="center">Welcome to esp-typescript 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/skittleson" target="_blank">
    <img alt="Twitter: skittleson" src="https://img.shields.io/twitter/follow/skittleson.svg?style=social" />
  </a>
</p>

> Transpile TypeScript to JavaScript for ESP8266/ESP32 microcontrollers template project. Writing safe, maintainable, and testable code is the projects goal.

## Install

```sh
npm install
```

## Usage

```sh
npm run-script transpile
```

## Run tests

```sh
npm run-script test
```

## Example

The simpliest example in `blinky.ts`. Blink a LED.

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

## Road map

-[x] Transpile TypeScript to Espruino flavor of JavaScript
-[x] Example usage of typed code
-[x] Unit testing
-[] Short commands to build, upload, and monitor
-[] Integration testing
-[] Firmware guidance docs

## Author

👤 **Spencer Kittleson**

* Website: https://docodethatmatters.com
* Twitter: [@skittleson](https://twitter.com/skittleson)
* Github: [@skittleson](https://github.com/skittleson)
* LinkedIn: [@skittleson](https://linkedin.com/in/skittleson)

## Show your support

Give a ⭐️ if this project helped you!

***
