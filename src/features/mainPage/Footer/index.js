import { FooterParagraph } from "../../../common/Section";
import { ContactSectionContainer } from "./styled";
import { Caption } from "../../../common/Caption";
import { ContactEmailLink } from "./styled";
import { SocialMediaLinks } from "./Socials";
import { mail } from "../../../assets/email";

/**
 * Contact footer component with email and social media links
 * Displays invitation to connect and available contact methods
 * @returns {JSX.Element} Footer section with contact information
 */
const ContactFooter = () => {
  const sectionTitle = "Let's talk!";
  const contactDescription =
    "I'm always open to new projects whenever I have the time. If you have a website, " +
    "dashboard or mobile app in mind and need some help to make your ideas come to life, " +
    "feel free to contact me 😊";
  const contactId = "contact";

  return (
    <ContactSectionContainer id={contactId}>
      <Caption>{sectionTitle}</Caption>
      <ContactEmailLink
        href={`mailto:${mail}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {mail}
      </ContactEmailLink>
      <FooterParagraph>{contactDescription}</FooterParagraph>
      <SocialMediaLinks />
    </ContactSectionContainer>
  );
};

export { ContactFooter as Footer };
