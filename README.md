# kindle-time

Use the clock on your Kindle. fork from [lecepin/kindle-time](https://github.com/lecepin/kindle-time)

Link [https://dreamjade.github.io/kindle/?tz=7&r=90](https://dreamjade.github.io/kindle/?tz=8&r=90)

### URL parameters

- `tz`: set time zone. Default value 8.
- `fs`: set font size. Default value 7.
- `r`: set rotate. Default value 0. It is used to rotate the screen display, such as setting 90, the display will be rotated 90 degrees.
- `l`: set lang. The zh-TW day of the week is displayed by default. You can set `en`.
- `tm`: set dark/light mode. The light mode (`light`) is displayed by default. You can set `dark` to enable dark mode.
- `ofs`: Add a time offset in milliseconds every day. Default value 0. Can be used to adjust the clock if it's slightly ahead or behind.

The required configuration items can be set individually or together.

For example: `https://dreamjade.github.io/kindle-time/?fs=10&r=270`:

### Screen always on

1) Connect to your Kindle via USB
  
2) Create a file in the root directory called "TESTD_PREVENT_SCREENSAVER" - can be an empty file, but must be named exactly. (It'll ultimately sit in /mnt/us/ )
   
3) Reboot the device
   
----------
For old devices

Do not turn off the screen settings.

In the system search box, enter `~ds`.
