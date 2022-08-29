import React, { useCallback } from "react";

const FIREBASE_DOMAIN = 'https://my-project-test-97564-default-rtdb.asia-southeast1.firebasedatabase.app/';

export const getMovies = async function(){
    const response = await fetch(`${FIREBASE_DOMAIN}/movie.json`);
    const data = await response.json()
    if(!response.ok){
        throw new Error (data.message || `Could not fetch data`);
    }
    console.log(data);
    return data;
}

export const getMovieDetail = async function(movieId) {
    const response = await fetch(`${FIREBASE_DOMAIN}/movie/${movieId}.json`);
    const data = await response.json();
    if(!response.ok){
        throw new Error(data.message || `Could not fetch data`);

    };
    console.log(data);

   
    return data;
}

export const getSession = async function(movieId, sessionId){
    const response = await fetch(`${FIREBASE_DOMAIN}/sessions/${movieId}/${sessionId}/seatsData.json`);
    const data = await response.json()
    if(!response.ok){
        throw new Error (data.message || `Could not fetch data`);
    }
    console.log(data);
    return data;
}


export const updateSeat = async function(movieId, sessionId,rowIndex,seatNoIndex ){
    const response = await fetch(`${FIREBASE_DOMAIN}/sessions/${movieId}/${sessionId}/seatsData/${rowIndex}/${seatNoIndex}.json`,{
        method: 'PATCH',
        body: JSON.stringify( {"isReserved":true}),
        headers: {
            'Content-Type':'application/json'}

    });
    const data = await response.json();
    if(!response.ok){
        throw new Error (data.message || `Could not fetch data`);
    };
    console.log(data);
}

export const cancelSeat = async function(movieId, sessionId,rowIndex,seatNoIndex ){
    const response = await fetch(`${FIREBASE_DOMAIN}/sessions/${movieId}/${sessionId}/seatsData/${rowIndex}/${seatNoIndex}.json`,{
        method: 'PATCH',
        body: JSON.stringify( {"isReserved":false}),
        headers: {
            'Content-Type':'application/json'}
    });
    const data = await response.json();
    if(!response.ok){
        throw new Error (data.message || `Could not fetch data`);
    };
    console.log(data);
}


export const checkSeat = async function(movieId, sessionId,rowIndex,seatNoIndex ){
    const response = await fetch(`${FIREBASE_DOMAIN}/sessions/${movieId}/${sessionId}/seatsData/${rowIndex}/${seatNoIndex}/isReserved.json`);
    const data = await response.json();
    if(!response.ok){
        throw new Error (data.message || `Could not fetch data`);
    };
    console.log(data);
    return data;
   
}

export const submitOrder = async function(orderData, uid=false){
    let address;

    if(uid){
        address = `${FIREBASE_DOMAIN}/movieticketorders/${uid}.json`;

    }else{
        address = `${FIREBASE_DOMAIN}/movieticketorders.json`;
    }
    const response = await fetch(address,{
        method:'POST',
        body: JSON.stringify(orderData),
        headers: {
            'Content-Type':'application/json'
        }
    });

    const data = await response.json();
    console.log(data);
    return data;

};


export const getOrder = async function(orderId, uid=false){

    let address;

    if(uid){
        address = `${FIREBASE_DOMAIN}/movieticketorders/${uid}/${orderId}.json`;

    }else{
        address = `${FIREBASE_DOMAIN}/movieticketorders/${orderId}.json`;
    }
   
    const response = await fetch(address);
    const data = await response.json()
    if(!response.ok){
        throw new Error (data.message || `Could not fetch data`);
    };
    console.log(data);
    return data;

}

export async function getTicketsHistory (uid){
    const response = await fetch(`${FIREBASE_DOMAIN}/movieticketorders/${uid}.json`);
    const data = await response.json();
    if(!response.ok){
        throw new Error (data.message || `Could not fetch data`);
    };
    let transformatedData=[];
    for(const orderId in data){
        transformatedData.push(data[orderId]);
        
    }
    console.log(transformatedData);
    return transformatedData;
}

export async function authConnect(userData,isLogin){
    let url;
    if(isLogin){
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAd6mNaHt3SZruBfE6hcYmlzJWDLZRiL6k';
    };
    if(!isLogin){
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAd6mNaHt3SZruBfE6hcYmlzJWDLZRiL6k';
    };
    const response = await fetch(url,{
        method: 'POST',
        body: JSON.stringify({
            email: userData.enteredEmail,
            password: userData.enteredPassword,
            returnSecureToken: true
        }),
        headers:{
            'Content-Type':'application/json'
        }
    });
    const data = await response.json();
    if(!response.ok){
        throw new Error(data.error.message || 'Could not fetch data');
    }
    const transformatedData = {
            token: data.idToken,
            uid: data.localId
        };
    return transformatedData;
}


