import { SocialNetworksList, SocialPlatformItem } from "./styled";
import { socials } from "../../../../assets/mySocials";
import { ExternalLink } from "./styled";

/**
 * Social media links component
 * Renders a horizontal list of social platform icons with links
 * @returns {JSX.Element} Social media navigation component
 */
const SocialMediaComponent = () => {
  const socialPlatforms = socials;

  const renderSocialLink = ({ name, url, Icon }) => (
    <SocialPlatformItem key={name}>
      <ExternalLink
        href={url}
        title={name}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon />
      </ExternalLink>
    </SocialPlatformItem>
  );

  return (
    <SocialNetworksList>
      {socialPlatforms.map(renderSocialLink)}
    </SocialNetworksList>
  );
};

export {
  SocialMediaComponent as Socials,
  SocialMediaComponent as SocialMediaLinks,
};
