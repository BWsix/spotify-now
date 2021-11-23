import chalk from "chalk";
import fs from "fs";

interface UserData {
  access_token: string;
  refresh_token: string;
  clientId: string;
  clientSecret: string;
}

export function getUser(): UserData {
  console.log(chalk.gray("Loading data..."));

  const file = fs.readFileSync("user.json");
  const user: UserData = JSON.parse(file.toString());

  return user;
}

export function saveUser(user: UserData) {
  console.log(chalk.gray("Saving data..."));

  fs.writeFileSync("user.json", JSON.stringify(user, null, 2));
}
