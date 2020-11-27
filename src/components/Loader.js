import React from 'react';
import styled, {keyframes} from "styled-components";
import { MovieIcon } from './Icons';
import { Helmet } from "react-helmet";

const Animation = keyframes `
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const LoaderDiv = styled.div `
    animation: ${Animation} 1s linear infinite;
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

function Loader() {
    return (
        <>
            <Helmet>
                <title>Loading | Making Movie-API 2020</title>
            </Helmet>
            <LoaderDiv>
                <MovieIcon size="36" />
            </LoaderDiv>
        </>
    );
}

export default Loader;
