import fs from "fs";

interface UserData {
  access_token: string;
  refresh_token: string;
}

export function getUser(): UserData {
  console.log("loading user data...");

  const file = fs.readFileSync("user.json");
  const user: UserData = JSON.parse(file.toString());

  return user;
}

export function saveUser(user: UserData) {
  console.log("saving user data...");

  fs.writeFileSync("user.json", JSON.stringify(user, null, 2));
}
