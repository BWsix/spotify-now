# spotify Now

## Getting Started

```bash
# 1
# Clone the repository (you can also click "Use this template")
git clone https://github.com/BWsix/spotify-now.git {your_project_name}
cd {your_project_name}

# 1.5 (optional)
# Edit `package.json` and `tsconfig.json` to your liking
...

# 2
# Install dependencies
yarn install

# 3
# Initialize your app by running the following command.
# after being redirected back to `http://localhost`, extract the `code` from the url query string and paste it to the command prompt
# (note that you need to add `http://localhost` to your `Redirect URIs` from the spotify dashboard)
yarn cli login --id {spotify-app-id} --secret {spotify-app-secret}

# 4
# Connect a RGB LED to (pwn) pins 11, 10, and 9 for `red`, `green`, and `blue` respectively

# 5
# Connect Arduino to your computer and run the following command:
yarn start
```

## Useful Links

- Troubleshooting - Arduino
  https://github.com/rwaldron/johnny-five/wiki/Getting-Started#troubleshooting
