# Spotify Now

![photo](https://user-images.githubusercontent.com/57709309/229525582-7e6ca388-c7d6-4a48-af74-42c3a02eea42.jpg)

## 2023.04.03 update
- this project only works with node version 12, as johnny-five is being used
- when node version is set to 12, `yarn global install` might or might not work depending on what global packages you installed
- therefore, the best way to try this project out is to clone and build the project yourself

## Getting Started

1. Install the package

   ```bash
   yarn global add spotify-now
   ```

2. Initialize your app by running the following command. \\
   (note that you need to add `http://localhost:6969` to your `Redirect URIs` from the [Spotify App Dashboard](https://developer.spotify.com/dashboard/applications))

   ```bash
   spotify-now login --id <spotify-app-id> --secret <spotify-app-secret>
   ```

3. Firmware

   1. Open [Arduino IDE](https://www.arduino.cc/en/software)

   1. Verify correct port and board

   1. Navigate to File > Examples > Firmata > StandardFirmataPlus

   1. Load sketch onto board.

4. Connect a RGB LED to (pwn) pins 11, 10, and 9 for `red`, `green`, and `blue` respectively,

5. Start the app

   ```bash
   spotify-now start
   ```

## DEMO

<https://www.youtube.com/watch?v=yVyv0xTs-cE>
