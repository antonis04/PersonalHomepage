import { FooterParagraph } from "../../../common/Section";
import { StyledFooter } from "./styled";
import { Caption } from "../../../common/Caption";
import { FooterEmail } from "./styled";
import { Socials } from "./Socials";
import { mail } from "../../../assets/email";

export const Footer = () => (
  <StyledFooter id="contact">
    <Caption>Let’s talk!</Caption>
    <FooterEmail
      href={`mailto:${mail}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {mail}
    </FooterEmail>
    <FooterParagraph>
      I'm always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me 😊
    </FooterParagraph>
    <Socials />
  </StyledFooter>
);
