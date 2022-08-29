
import React from 'react';
import classes from './MovieDescription.module.css';

const MovieDescription = (props) =>{
    return (
        <div className={classes.descriptioncontainer} >
             <div className={classes.desbackgroundimg}>
                <img src={props.img}/>
            </div>
           
            <div className={classes.desshort}>
                <span className={classes.destag}>Release Date:  </span>
                <span>{props.releasedate}</span>

            </div>
            <div  className={classes.desshort}>
                <span className={classes.destag}>Director:  </span>
                <span>{props.director}</span>
            </div>
            <div  className={classes.desshort}>
                <span className={classes.destag}>MainCast:  </span>
                <span>{props.cast}</span>
            </div>

            <div  className={classes.deslong}>
                <p>
                    {props.description}
                </p>
            
            </div>
        </div>
    )
}

export default MovieDescription;