import { LinkWrapper, LinkLabel, ExternalLink } from "./styled";

/**
 * Displays a labeled external link for repository URLs
 * @param {string} targetUrl - The URL to link to
 * @param {string} linkLabel - The descriptive label for the link
 */
export const UrlDisplayComponent = ({ targetUrl, linkLabel }) => (
    <LinkWrapper>
        <LinkLabel>{linkLabel}</LinkLabel>
        <ExternalLink
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
        >
            {targetUrl}
        </ExternalLink>
    </LinkWrapper>
);