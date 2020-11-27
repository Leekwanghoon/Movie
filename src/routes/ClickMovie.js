import React from 'react'
import styled from "styled-components";
import {Helmet} from "react-helmet";


// const ClickMovieSection

const ContainerMovie = styled.div`
    margin-bottom: 70px;
    position: relative;
    top: 30vh;
    font-weight: 300;
    padding: 20px;
    border-radius: 5px;
    color: "black";
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
        0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;


const MovieImg = styled.img`
    position: relative;
    top: -50px;
    max-width: 150px;
    width: 100%;
    margin-right: 30px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
        0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    &:hover {
        opacity: 0.5;
    }
`;

const MovieData = styled.div`
    margin: 0;
    font-weight: 300;
`;

const MovieTitle = styled.h3`
    margin-bottom: 10px;
    font-size: 24px;
    color: #2c2c2c;
`;

const MovieYear = styled.h5`
    margin-bottom:10px;
    font-weight: 300;
`;

const MovieGenres = styled.ul`
    list-style: none;
    padding: 0;
    margin-bottom:10px;
    display: flex;
    flex-wrap: wrap;
    margin: 5px 0px;
`;

const MovieGenresGenre = styled.li`
    margin-right: 10px;
    font-size: 14px;
`;

const MovieSummary = styled.p`

`;

const MovieRank = styled.div`
    margin-bottom:10px;
`;

const MovieRuntime = styled.div`
    margin-bottom:10px;
`;

const MovieRanking = styled.span`
    position: absolute;
    top: -55px;
    right: -11px;
    color: #482d73;
    font-size: 101px;
    transform: rotate(11deg);
`;


const temp = {
    textDecoration: "none"
}


function ClickMovie(props) {
    const ClickData = props.location.state;
    console.log(ClickData);
    return (
        <>
            <Helmet>
                <title>{ClickData.title} | {ClickData.genres[0]}</title>
            </Helmet>
            
            <ContainerMovie>
                <MovieRanking>{ClickData.ranking+1}</MovieRanking>
                <MovieImg src={ClickData.poster} alt={ClickData.title} title={ClickData.title} />
                <MovieData>
                    <MovieTitle>제목 : {ClickData.title}</MovieTitle>
                    <MovieYear>개봉년도 : {ClickData.year}</MovieYear>
                    <MovieRank>평점 : {ClickData.rating}point</MovieRank>
                 <MovieRuntime>상영시간 : {ClickData.runtime}min</MovieRuntime>
                    <MovieGenres>
                        {ClickData.genres[0]}
                    </MovieGenres>
                    <MovieSummary>{ClickData.summary.slice(0,180)}...</MovieSummary>
                </MovieData>
            </ContainerMovie>
        </>
    )
}

export default ClickMovie
