# spotify Now

## Getting Started

```bash
# 1. Install the package (only works with yarn for now)
yarn global add spotify-now

# 2. Initialize your app by running the following command.
# (note that you need to add `http://localhost:6969` to your `Redirect URIs` from the spotify dashboard)
spotify-now login --id {spotify-app-id} --secret {spotify-app-secret}

# 3.
# Connect a RGB LED to (pwn) pins 11, 10, and 9 for `red`, `green`, and `blue` respectively,
# and connect the Arduino to the computer.

# 4. you're ready >:)
spotify-now start
```

## Useful Resources

- Troubleshooting - Arduino
  https://github.com/rwaldron/johnny-five/wiki/Getting-Started#troubleshooting

- Spotify for Developers - Dashboard
  https://developer.spotify.com/dashboard/applications
