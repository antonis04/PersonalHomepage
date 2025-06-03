import { EnvelopeSVG, HireButton } from "./hireMe";
import { ProfileContainer } from "./styled";
import { Caption } from "../../../../common/Caption";
import { NameHeader } from "../../../../common/Header";
import { HeaderParagraph } from "../../../../common/Section";

export const Profile = () => (
  <ProfileContainer>
    <Caption>THIS IS</Caption>
    <NameHeader>Marcin Osojca</NameHeader>
    <HeaderParagraph>
      💻⚙️ I'm a React Developer with a background as an Automation Engineer,
      bringing problem-solving skills to frontend development. Ready to grow and
      contribute in a dynamic team!
    </HeaderParagraph>
    <HireButton href="#contact">
      <EnvelopeSVG />
      Hire me
    </HireButton>
  </ProfileContainer>
);
