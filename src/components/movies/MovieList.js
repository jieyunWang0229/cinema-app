import React, {Fragment} from 'react';
import { useEffect } from 'react';
import classes from './MovieList.module.css';
import Movie from './Movie';
import useHttp from '../../hooks/use-http';
import { getMovies } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';


const MovieList = (props) => {
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
                            <Movie key ={index} img = {movieData.poster} id={index}/>));
    }
    
    return (
       <Fragment> 
        <div  className={classes.listheader}>
            Now showing:
       </div>
  
        <div className={classes.moviecontainer}>
           
            {movies}

        </div>
        </Fragment>
    )
}

export default MovieList;