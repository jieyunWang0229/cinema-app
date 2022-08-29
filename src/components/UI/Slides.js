import React,{ useEffect, useRef, useState } from "react";
import classes from "./Slides.module.css";
import pic1 from "../../assets/1a.jpg";
import pic2 from "../../assets/2a.jpg";
import pic3 from "../../assets/3a.jpg";

const Slides = (props) =>{
    const imgs = [pic1,pic2,pic3];
    const [index, setIndex]= useState(0);
    const timeourRef = useRef(null);

    useEffect(()=>{
        timeourRef.current= setTimeout(()=>{
            setIndex( (preIndex) => preIndex == imgs.length -1 ? 0 : preIndex +1)
        },2500)
        return () =>{
                clearTimeout(timeourRef.current);
              }
        
    },[index]);

    return (
        <div className={classes.sliderscontainer}>
            <div className={classes.slideshow}
                 style = {{transform: `translateX(${-index * 100}%)`}}
            >
                <div className={classes.slide}>
                    <img src={pic1}></img>
                
                </div>
                <div className={classes.slide}>
                    <img src={pic2}></img>
                
                </div>
                <div className={classes.slide}>
                    <img src={pic3}></img>
                
                </div>

            </div>
           

        </div>
    )
};

export default Slides;