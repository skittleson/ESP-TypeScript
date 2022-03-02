# ESP-TypeScript

Running a JavaScript / TypeScript app on a microcontroller.

## Resources

https://www.espruino.com/ESP8266_Flashing
http://www.espruino.com/EspruinoESP8266#firmware-updates

`pip install esptool` - this install as `esptool.py.exe`. It can vary.

Flash on COM5 using esptool. Update to your details.

`esptool.py.exe --port COM5 --baud 115200 write_flash --flash_freq 80m --flash_mode qio --flash_size 32m 0x0000 "boot_v1.6.bin" 0x1000 espruino_esp8266_user1.bin 0x3FC000 esp_init_data_default.bin 0x3FE000 blank.bin`

`npx @serialport/terminal` - a simple serial command line tool for debugging. https://serialport.io/docs/9.x.x/guide-cli

`npm install -g espruino` - tool to upload new js files.
http://www.espruino.com/Programming

For Windows, upload index.js to COM3 without bluetooth.

`espruino --no-ble -p COM3 -b 115200 index.js`
