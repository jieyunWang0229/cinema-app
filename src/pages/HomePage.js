import React,{ Fragment } from 'react';
import Slides from '../components/UI/Slides';
import MovieList from '../components/movies/MovieList';

const HomePage = () =>{
    return (
        <Fragment>
            <Slides/>
             <MovieList/>
        </Fragment>
       
    )
}

export default HomePage;