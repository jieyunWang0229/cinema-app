import React from 'react';
import { useNavigate } from "react-router-dom";
import classes from "./PaymentInput.module.css";
import useInput from "../../hooks/use-input";
import { useSelector,useDispatch } from "react-redux";
import useHttp from "../../hooks/use-http";
import { submitOrder } from "../../lib/api";
import { orderActions } from "../../Store/order-slice";
import LoadingSpinner from "../UI/LoadingSpinner";

const validateEmail = (input) =>{
    return String(input)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const  validateName = (input) =>{
    return input.trim().length >2 ;
};

const validateCardnumer = (input) =>{
    return String(input)
    .match(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/);
};

const validateMonth = (input) =>{
    return String(input)
    .match(/^[0-1][0-9]$/);
};

const validateYear = (input) =>{
    return String(input)
    .match(/^[0-9][0-9]$/);
};

const validateCVV = (input) =>{
    return String(input)
    .match(/^[0-9][0-9][0-9]$/);
};


const PaymentInput = (props) =>{
    const navigate = useNavigate();
    const movieName = useSelector((state) => state.order.movieName);
    const selectedSeats = useSelector((state) => state.order.orderedTickets);
    const adTicket = useSelector((state) => state.order.adTicket);
    const conTicket = useSelector((state) => state.order.conTicket);
    const totalPrice = useSelector((state) => state.order.totalPrice);
    const uid = useSelector( state => state.auth.uid);
    const { sessionId,time, date} = props;
    let formIsValid = false;
    let loading = false;
    const dispatch = useDispatch();

    const { sendRequest,status, data, error } = useHttp(submitOrder,false);

    const {
        value: inputEmail,
        isValid : emailIsValid,
        inputHasError: inputEmailHasErr,
        inputOnchangeHandler: inputEmailOnChangeHandler,
        inputBlurHandler: inputEmailBlurHandler,
        inputResetHandler: restEmail
    } = useInput(validateEmail);

    const {
        value: inputName,
        isValid : nameIsValid,
        inputHasError: inputNameHasErr,
        inputOnchangeHandler: inputNameOnChangeHandler,
        inputBlurHandler: inputNameBlurHandler,
        inputResetHandler: restName
    } = useInput (validateName);

    const {
        value: inputCardNo,
        isValid : cardNoIsValid,
        inputHasError: inputCardNoHasErr,
        inputOnchangeHandler: inputCardNoOnChangeHandler,
        inputBlurHandler: inputCardNoBlurHandler,
        inputResetHandler: restCardNo
    } = useInput(validateCardnumer);

    const {
        value: inputMonth,
        isValid : monthIsValid,
        inputHasError: inputMonthHasErr,
        inputOnchangeHandler: inputMonthOnChangeHandler,
        inputBlurHandler: inputMonthBlurHandler,
        inputResetHandler: restMonth
    } = useInput(validateMonth);

    const {
        value: inputYear,
        isValid : yearIsValid,
        inputHasError: inputYearHasErr,
        inputOnchangeHandler: inputYearOnChangeHandler,
        inputBlurHandler: inputYearBlurHandler,
        inputResetHandler: restYear
    } = useInput(validateYear );

    const {
        value: inputCVV,
        isValid : cVVIsValid,
        inputHasError: CVVHasErr,
        inputOnchangeHandler: inputCVVOnChangeHandler,
        inputBlurHandler: inputCVVBlurHandler,
        inputResetHandler: restCVV
    } = useInput(validateCVV );

   
    if( emailIsValid && nameIsValid && cardNoIsValid && monthIsValid && yearIsValid && cVVIsValid  ){
        formIsValid = true;
    }

    const paySumbitHandler = async (event) =>{
        event.preventDefault();
        if(!formIsValid)
         return;

        const email = inputEmail;
        console.log(movieName);
        const orderData = {
            name: inputName,
            sessionId: sessionId,
            movieName: movieName,
            time: time,
            date: date,
            selectedSeats: selectedSeats,
            adTicket: adTicket,
            conTicket: conTicket,
            totalPrice:totalPrice,
        };
        if(uid){
            sendRequest(orderData,uid);
        }else{
            sendRequest(orderData);
        }
        

    };

    if(status == 'pending' ){
      loading= true;
    }
   

    if( status == 'completed' && data.name ){
       
        dispatch(orderActions.setOrderId({orderId : data.name}));
        
        navigate(`/ticket/${data.name}`);

        loading = false;
       
       
    }

    return (
        <div className={classes.paymentcontainer} onSubmit={paySumbitHandler}>
            <div className={classes.paymentheader}>Pay Info</div>
           <form className={classes.paycontent}>
                <div className={classes.paygroup} >
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email"
                            value={inputEmail}
                            onChange={inputEmailOnChangeHandler}
                            onBlur={inputEmailBlurHandler}
                            ></input>
                    {inputEmailHasErr && <p>Please enter a valid email.</p>}
                </div>
                <div className={classes.paygroup}>
                    <label htmlFor="name">Name on Card</label>
                    <input type="text" id="name"
                            value={inputName}
                            onChange={inputNameOnChangeHandler}
                            onBlur={inputNameBlurHandler}
                            ></input>
                    { inputNameHasErr && <p>Please enter a valid name.</p>}
                </div>
                <div className={classes.paygroup}>
                    <label htmlFor="cardnumber">Card Number</label>
                    <input type="text" id="cardnumber"
                            value={inputCardNo}
                            onChange={inputCardNoOnChangeHandler}
                            onBlur={inputCardNoBlurHandler}
                            ></input>
                    {inputCardNoHasErr && <p>Please enter a card no.</p> }
                </div>
                <div className={classes.paygroupsmall}>
                    <div className={classes.paygroupsmallitem}>
                        <label htmlFor="cardmm">Month</label>
                        <div className={classes.iteminput}>
                            <input type="text" id="cardmm" maxLength="2" size="2" placeholder="MM"
                                value={inputMonth}
                                onChange={inputMonthOnChangeHandler}
                                onBlur={inputMonthBlurHandler}></input>
                            {inputMonthHasErr && <p>Not valid</p>}

                        </div>
                       
                    </div>
                    <div className={classes.paygroupsmallitem}>
                        <label htmlFor="cardyy">Year</label>
                        <div className={classes.iteminput}>
                            <input type="text" id="cardyy" maxLength="2" size="2" placeholder="YY"
                                    value={inputYear}
                                    onChange={inputYearOnChangeHandler}
                                    onBlur={inputYearBlurHandler} ></input>
                                {inputYearHasErr && <p>Not valid</p>}
                        </div>
                       
                    </div>
                    <div className={classes.paygroupsmallitem}>
                        <label htmlFor="cvv">CVV</label>
                        <div className={classes.iteminput}>
                        <input type="text" id="cvv" maxLength="3" size="3"
                                 value={inputCVV}
                                 onChange={inputCVVOnChangeHandler}
                                 onBlur={inputCVVBlurHandler}></input>
                             {CVVHasErr && <p>Not valid</p>}
                        </div>
                    </div>              
                </div>
                <div className={classes.paybtn} >
                    <button >PAY NOW</button>
                  
                </div>
                {loading && <LoadingSpinner/>}
           </form>
           
           
        </div>
    )
}

export default PaymentInput;