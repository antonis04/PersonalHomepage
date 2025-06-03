import { Profile } from "./MyProfile";
import { Picture } from "./Picture/styled";
import { StyledHeader } from "./styled";
import { ThemeSwitcher } from "./Switch";
import profilePicture from "./../../../assets/profilePic.png";

export const Header = () => (
  <StyledHeader>
    <Picture src={profilePicture} alt="Marcin" />
    <ThemeSwitcher />
    <Profile />
  </StyledHeader>
);
