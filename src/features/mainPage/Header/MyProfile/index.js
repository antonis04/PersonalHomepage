import { EnvelopeSVG, HireButton } from "./hireMe";
import { ProfileContainer } from "./styled";
import { Caption } from "../../../../common/Caption";
import { NameHeader } from "../../../../common/Header";
import { HeaderParagraph } from "../../../../common/Section";

/**
 * User profile display component showing personal information
 * Includes name, description, and hire me button
 * Output: Profile display section
 */
const ProfileDisplay = () => {
  const userIntroduction = "THIS IS";
  const fullName = "Antoni Samol";
  const professionalDescription =
    "💻👨‍💻 I'm a passionate Frontend Developer studying IT & Economics. I'm " +
    "focused on expanding my portfolio with new projects and courses. Right " +
    "now, I'm looking for new job opportunities.";
  const contactLinkId = "#contact";
  const hireMeText = "Hire me";

  return (
    <ProfileContainer>
      <Caption>{userIntroduction}</Caption>
      <NameHeader>{fullName}</NameHeader>
      <HeaderParagraph>{professionalDescription}</HeaderParagraph>
      <HireButton href={contactLinkId}>
        <EnvelopeSVG />
        {hireMeText}
      </HireButton>
    </ProfileContainer>
  );
};

export { ProfileDisplay as Profile, ProfileDisplay as UserProfileDisplay };
