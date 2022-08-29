import React from 'react';                                                                                                   import { Link } from 'react-router-dom';
import classes from './SessionTime.module.css';
import { useDispatch } from 'react-redux';
import { selectedSeatsActions } from '../../Store/selectedseats-slice';

const SessionTime =(props) =>{
    const id = props.id;
    const movieId = props.movieId;
    const movieIndex = props.movieIndex;
    console.log(movieIndex);
    const dispatch = useDispatch();
    const onClickHandler =() =>{
        dispatch(selectedSeatsActions.refreshSelectedSeat());
    }

    return (
        <div className={classes.sessiontime}>
            <Link to={`/bookingticke?movieIndex=${movieIndex}&sessionId=${id}&time=${props.time}&date=${props.date}`} onClick={onClickHandler}>{props.time}</Link>
        </div>
        
    )
}

export default SessionTime;