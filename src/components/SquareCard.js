import React from "react";
import styled from "styled-components";

const Overlay = styled.div `
    background-color: rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s linear; 
`;
const Container = styled.div `
    background-image: url(${props => props.bg});
    background-size: cover;
    &:hover{
        ${Overlay} {
            opacity: 1;
        }
    }
`;


const Number = styled.div `
    color: white;
    display: flex;
    align-items: center;
    &:first-child {
        margin-right: 30px;
    }
`;

const NumberText = styled.span `
    margin-left: 10px;
    font-size: 16px;
`;

const SquareCard = ({poster ,runtime, rating}) => ( 
    <Container bg={poster}>
        <Overlay>
            <Number>
                <NumberText>{runtime}</NumberText>
            </Number>
            <Number>
                <NumberText>{rating}</NumberText>
            </Number>
        </Overlay>
    </Container>
);



export default SquareCard;