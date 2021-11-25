import fs from "fs";

export interface UserData {
  access_token: string;
  refresh_token: string;
  clientId: string;
  clientSecret: string;
}

export function isUser() {
  return fs.existsSync("user.json");
}

export function getUser() {
  const file = fs.readFileSync("user.json");
  const user: UserData = JSON.parse(file.toString());

  return user;
}

export function saveUser(user: UserData) {
  fs.writeFileSync("user.json", JSON.stringify(user, null, 2));
}

export function updateUser(user: Partial<UserData>) {
  const _user = getUser();
  saveUser({ ..._user, ...user });
}

export function deleteUser() {
  fs.unlinkSync("user.json");
}
