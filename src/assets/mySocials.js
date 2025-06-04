import { ReactComponent as LinkedIn } from "./svg/LinkedIN.svg";
import { ReactComponent as GitHub } from "./svg/Github.svg";
import { StyleIcon } from "../atributes/homepage/Footer/Socials/styled";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/antonis04",
    Icon: StyleIcon(GitHub),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/antoni-samol-44649a368/",
    Icon: StyleIcon(LinkedIn),
  },
];
