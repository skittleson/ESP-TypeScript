# ESP-TypeScript

Running a JavaScript / TypeScript app on a microcontroller.

## Resources

`npx @serialport/terminal` - a simple serial command line tool for debugging. https://serialport.io/docs/9.x.x/guide-cli

`npm install -g espruino` - tool to upload new js files.
http://www.espruino.com/Programming

For Windows, upload index.js to COM3 without bluetooth.

`espruino --no-ble -p COM3 -b 115200 index.js`
