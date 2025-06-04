import { UserProfileDisplay } from "./MyProfile";
import { AvatarImage } from "./Picture/styled";
import { MainHeaderContainer } from "./styled";
import { ThemeSwitcher } from "./Switch";
import userAvatar from "./../../../assets/profilePic.png";

/**
 * Main header component for the personal homepage
 * Contains user avatar, profile information, and theme switcher
 * @returns {JSX.Element} Rendered header component
 */
const HeaderComponent = () => {
  return (
    <MainHeaderContainer>
      <AvatarImage src={userAvatar} alt="Antoni" />
      <ThemeSwitcher />
      <UserProfileDisplay />
    </MainHeaderContainer>
  );
};

export { HeaderComponent as Header };
