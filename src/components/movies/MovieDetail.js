import React from 'react';
import classes from './MovieDetail.module.css';
import DateInput from '../UI/DateInput';
import { TiFilm, TiStopwatch } from 'react-icons/ti';


const MovieDetail = (props) =>{

    return (
        <div className={classes.mdcontainer}>
           
                <div className={classes.mdpicture}>
                    <img src={props.img}></img>
                </div>
                <div className={classes.mdinfo}>
                    <div className={classes.mdheader}>
                    
                        {props.name}
                    </div>
                    <div className={classes.mdtags}>
                        <div  className={classes.mdtag}>
                            <TiFilm className={classes.mdicon}/>
                          <span>{props.category}</span>
                        </div>
                        <div  className={classes.mdtag}> 
                            <TiStopwatch className={classes.mdicon}/>
                          <span>{props.duration}</span>
                        </div>
                    </div>


                 </div>
            
         


        </div>

    )
}

export default MovieDetail;