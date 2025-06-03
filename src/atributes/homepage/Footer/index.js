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
      I'm always excited to work on new projects! If you need a website, a
      dashboard, or a mobile app, I can help bring your ideas to life. Get in
      touch, and let's create something great together!
    </FooterParagraph>
    <Socials />
  </StyledFooter>
);
