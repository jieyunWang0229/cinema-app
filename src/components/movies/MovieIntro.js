import React,{ useState } from "react";
import { Link } from 'react-router-dom';
import SessionDateList from "./SessionDateList";
import classes from "./MovieIntro.module.css";


const MovieIntro = (props) =>{
    const { sessionDate,id } = props
   
    const dayOfWeek =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months =['Jan','Feb','Mar','Apr','May','June', 'Jul','Aug','Sep','Oct','Nov','Dec'];                              
    const Dates= sessionDate.map(date =>  new Date(date));
    let today = new Date(); 
    let day;
    let dateInMonth;
    let month;
    let dateLists = Dates.map((date,index)=> {
                         
                            if(date.getDate() === today.getDate() && date.getMonth() === today.getMonth() ){
                                
                                day = "Today";

                            }else{
                                day = dayOfWeek[new Date(date).getDay()];
                                dateInMonth = new Date(date).getDate();
                                month =months[new Date(date).getMonth()];
                            };
                            let dateString = sessionDate[index];

                       return  <div  key={index} className={classes.introdate}>{dateInMonth} {month}  </div>
                })

    return (
        <div className={classes.introcontainer} >
            
             <div className={classes.intropic}>
                <img src={props.img}/>
            </div>
            <div className={classes.introtext}>  
                <div className={classes.introname}>{props.name}  </div> 
                <div className={classes.introsmalltext}>{props.description}  </div> 
                <div className={classes.introdates}>{dateLists}</div>
                <div className={classes.introlink}><Link to={`/movie/${id}`}>More</Link></div>
            </div>
           
           
        
        </div>
    )
}

export default MovieIntro;