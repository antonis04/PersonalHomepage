import { EnvelopeSVG, HireButton } from "./hireMe";
import { ProfileContainer } from "./styled";
import { Caption } from "../../../../common/Caption";
import { NameHeader } from "../../../../common/Header";
import { HeaderParagraph } from "../../../../common/Section";

export const Profile = () => (
  <ProfileContainer>
    <Caption>THIS IS</Caption>
    <NameHeader>Antoni Samol</NameHeader>
    <HeaderParagraph>
      💻👨‍💻 I'm a passionate Frontend Developer studying IT & Economics. I'm
      focused on expanding my portfolio with new projects and courses. Right
      now, I'm looking for new job opportunities.
    </HeaderParagraph>
    <HireButton href="#contact">
      <EnvelopeSVG />
      Hire me
    </HireButton>
  </ProfileContainer>
);