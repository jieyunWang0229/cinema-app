import React from 'react';
import { useEffect,Fragment } from "react";
import { getMovies } from "../lib/api";
import useHttp from "../hooks/use-http";
import classes from "./MoviesPage.module.css";
import MovieIntro from "../components/movies/MovieIntro";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const MoviesPage = (props) =>{
    let movies;
    const { sendRequest, status, data, error } = useHttp(getMovies,true);
    useEffect(()=>{
        sendRequest()
    },[sendRequest]);

    if(error){
        movies = <p>{error}</p>;
    };
    if(status === 'pending'){
        movies = <LoadingSpinner/>;
    };
    if(status === 'completed' && data){

        movies = data.map ((movieData,index) =>( 
                            <MovieIntro 
                                key ={index} 
                                id={index}
                                img = {movieData.poster} 
                                name={movieData.name}   
                                description={movieData.description} 
                                sessionDate={movieData.date} />));
    }
    return (
        <div className={classes.moviespagecontainer}>
            {movies}
        </div>
        
    )
}

export default MoviesPage;