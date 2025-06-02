import { Profile } from "./Profile";
import { Picture } from "./Picture/styled";
import { StyledHeader } from "./styled";
import { ThemeSwitcher } from "./ThemeSwitcher";
import profilePicture from "./../../../../assets/picture/profile.jpg";

export const Header = () => (
    <StyledHeader>
        <Picture src={profilePicture} alt="Marcin" />
        <ThemeSwitcher />
        <Profile />
    </StyledHeader>
);