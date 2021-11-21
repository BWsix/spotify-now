# spotify Now

## Getting Started

```bash
# 1. Install the package (only works with yarn for now)
yarn global add spotify-now

# 2. Initialize your app by running the following command.
# after being redirected back to `http://localhost`, extract the `code` from the url query string and paste it to the command prompt
# (note that you need to add `http://localhost` to your `Redirect URIs` from the spotify dashboard)
spotify-now login --id {spotify-app-id} --secret {spotify-app-secret}

# 3. That's it >:)
spotify-now start
```

## Useful Resources

- Troubleshooting - Arduino
  https://github.com/rwaldron/johnny-five/wiki/Getting-Started#troubleshooting
