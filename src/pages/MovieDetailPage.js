import React, { Fragment,useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/movies/MovieDetail";
import SessionDateList from "../components/movies/SessionDateList";
import SessionTimeList from "../components/movies/SessionTimeList";
import MovieDescription from "../components/movies/MovieDescription";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getMovieDetail } from "../lib/api";


const MovieDetailPage =(props) =>{
    const params = useParams();
    const { movieId } = params;
    console.log( movieId);
    const [selectDate, setSelectDate] = useState(null);
    const { sendRequest, status, data:movie, error } = useHttp(getMovieDetail, true);
    useEffect(()=>{
        sendRequest(movieId);
    },[sendRequest]);

    let content;

    const selectDateHandler =(date)=>{
        setSelectDate(date);
    };
    
    if(error){
        content= <p>{error}</p>
    }
    if(status === 'pending'){
        content = <LoadingSpinner/>
    }
    if( status === 'completed' && movie){
        
        content = <Fragment>
                    <MovieDetail img={movie.img} name={movie.name} category={movie.category} duration={movie.duration}/>
                    
                    <SessionDateList selectDate={selectDateHandler} sessionDate={movie.date}/>
                    <SessionTimeList date={selectDate? selectDate : movie.date[0]} sessionData={movie.sessions} movieIndex={movieId} movieId={movie.id}/>
                    <MovieDescription 
                                    img={movie.img}
                                    releasedate={movie.releasedate}
                                    director={movie.director}
                                    cast={movie.cast}
                                    description={movie.description}
                    />
                   </Fragment>

    }
  

 

   
    return (
        <Fragment>
              {content}
        </Fragment>
        
           

       
       
    )
}

export default MovieDetailPage;
