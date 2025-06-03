import { ReactComponent as LinkedIn } from "./svg/LinkedIN.svg";
import { ReactComponent as GitHub } from "./svg/Github.svg";
import { StyleIcon } from "../atributes/homepage/Footer/Socials/styled";

export const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/marcin-osojca-17680313a/",
    Icon: StyleIcon(LinkedIn),
  },
  {
    name: "GitHub",
    url: "https://github.com/Mikoli09",
    Icon: StyleIcon(GitHub),
  },
];
