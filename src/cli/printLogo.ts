import { textSync } from "figlet";

export const printLogo = () => {
  const logoText = "Spotify  Now";

  const parsedLogo = textSync(logoText, {
    horizontalLayout: "fitted",
    whitespaceBreak: true,
  });

  console.log(parsedLogo);
};
