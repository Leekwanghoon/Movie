import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        background:${props => props.theme.BodyBgColor};
        height: ${props => props.theme.BodyHeight};
    }
`;