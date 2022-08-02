# Spotify Now

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

<https://youtube.com/shorts/pZczC2deG0c>
