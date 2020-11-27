import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const ContainerMovie = styled.div`
    margin-bottom: 70px;
    font-weight: 300;
    padding: 20px;
    top:50px;
    position: relative;
    border-radius: 5px;
    color: "black";
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
        0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    &:hover {
        transform:scale(1.1);
    }
`;


const MovieData = styled.div`
    margin: 0;
    font-weight: 300;
`;

const MovieTitle = styled.h3`
    margin-bottom: 5px;
    font-size: 24px;
    color: #2c2c2c;
    &:hover {
        transform:scale(1.1);
    }
    
`;

const MovieYear = styled.h5`
    margin: 0;
    font-weight: 300;
    &:hover {
        transform:scale(1.1);
    }
`;

const MovieGenres = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    margin: 5px 0px;
    &:hover {
        transform:scale(1.1);
    }
    
`;

const MovieGenresGenre = styled.li`
    margin-right: 10px;
    font-size: 14px;
    &:hover {
        transform:scale(1.1);
    }
`;

const MovieSummary = styled.p`
    &:hover {
        transform:scale(1.1);
    }
`;

const temp = {
    textDecoration: "none"
}

const MovieRanking = styled.span`
    position: absolute;
    top: -55px;
    left: -25px;
    color: #482d73;
    font-size: 101px;
    transform: rotate(-11deg);
`;

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s linear; 
`;

const ImgContainer = styled.div`
    background-image: url(${props => props.bg});
    background-size: cover;
    width:200px;
    height:300px;
    position:relative;
    top:-50px;
    left: 400px;
    &:hover{
        ${Overlay} {
            opacity: 1;
        }
    }
`;

const Rating = styled.div`
    color: white;
    display: flex;
    align-items: center;
    &:first-child {
        margin-right: 30px;
    }
`;

const RatingText = styled.span `
    margin-left: 10px;
    font-size: 16px;
`;


function Movie({
    ranking,
    id,
    title,
    year,
    summary,
    poster,
    genres,
    rating,
    runtime,
}) {
    return (
        <>
        <Helmet>
            <title>MainMovie | You Can see Ranking Movie!</title>
        </Helmet>
        <ContainerMovie>
            <MovieRanking>{ranking+1}</MovieRanking>
            <Link style={temp}
                to={{ pathname:`/movie/${id}`,
                state: {
                    title,
                    year,
                    summary,
                    poster,
                    genres,
                    rating,
                    runtime,
                    ranking
                }
            }}
            >

            <ImgContainer bg={poster}>
                <Overlay>
                    <Rating>
                        <RatingText>평점 : {rating}</RatingText>
                    </Rating>
                    <Rating>
                        <RatingText>상영시간 : {runtime}</RatingText>
                    </Rating>    
                </Overlay>
            </ImgContainer>

                <MovieData>
                    <MovieTitle>제목/{title}</MovieTitle>
                    <MovieYear>개봉년도/{year}</MovieYear>
                    <MovieGenres>
                        {genres.map((genre,index) => (
                            <MovieGenresGenre key={index}>
                                {genre}
                            </MovieGenresGenre> 
                        ))}
                    </MovieGenres>
                    <MovieSummary>줄거리 : {summary.slice(0,180)}...</MovieSummary>
                </MovieData>
            </Link>
        </ContainerMovie>
        </>
    )
}

export default Movie
