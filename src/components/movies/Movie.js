import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Movie.module.css';


const Movie =(props) =>{
    const id = props.id
    return (
        <Link to={`/movie/${id}`}className={classes.moviecard}>
            <div>
                <img src={props.img}></img>
            </div>
            <div  className={classes.text}>
                More Info
            </div>
        </Link>
    )
}

export default Movie;