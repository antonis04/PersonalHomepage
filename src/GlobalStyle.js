import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: "Inter", sans-serif;
        background-color: ${({theme})=> theme.colors.body.background};
        margin:0;
        transition: ${({refreshDisabled}) => refreshDisabled ? "none" : "0.3s"};
    }
`;