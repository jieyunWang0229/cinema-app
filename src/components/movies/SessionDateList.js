import React, { useState } from 'react';
import classes from './SessionDateList.module.css';
import DateInput from "../UI/DateInput";

//const sessionDate = ["2022-07-11","2022-07-12","2022-07-13","2022-07-14","2022-07-15","2022-07-16"];

const SessionDateList =(props) =>{
    const { sessionDate } = props
    const [ activeIndex,setactiveIndex] = useState(0);
    const selectSessionDateHandler =(index,date)=>{
        setactiveIndex (index);
        props.selectDate(date);
    }
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

                       return  <DateInput 
                                    key={index}
                                    day={day} 
                                    dateInMonth={dateInMonth} 
                                    month={month} 
                                    isActive ={index == activeIndex }
                                    onClick={selectSessionDateHandler.bind(this,index,dateString)}/>
                })
    
    return(
        <div className ={classes.sessionlist}>
            {dateLists}
        </div>
    )
}

export default SessionDateList;