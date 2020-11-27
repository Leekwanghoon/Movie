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
`;


const MovieImg = styled.img`
    max-width: 150px;
    width: 100%;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
        0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    &:hover {
        background-size: 1.5;
        opacity: 0.8;
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
`;

const MovieYear = styled.h5`
    margin: 0;
    font-weight: 300;
`;

const MovieGenres = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
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

const temp = {
    textDecoration: "none"
}



function Movie({
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
            <Link style={temp}
                to={{ pathname:`/movie/${id}`,
                state: {
                    title,
                    year,
                    summary,
                    poster,
                    genres,
                    rating,
                    runtime
                }
            }}
            >
            <div style={{
                display:'flex',
                justifyContent: 'center',
                position: 'relative',
                width:"100%",
                height: "100%"
            }}>
                <MovieImg src={poster} alt={title} title={title} />
            </div>
                <MovieData>
                    <MovieTitle>{title}</MovieTitle>
                    <MovieYear>{year}</MovieYear>
                    <MovieGenres>
                        {genres.map((genre,index) => (
                            <MovieGenresGenre key={index}>
                                {genre}
                            </MovieGenresGenre> 
                        ))}
                    </MovieGenres>
                    <MovieSummary>{summary.slice(0,180)}...</MovieSummary>
                </MovieData>
            </Link>
        </ContainerMovie>
        </>
    )
}

export default Movie
