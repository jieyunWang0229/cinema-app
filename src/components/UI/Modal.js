import React,{ Fragment } from "react";
import classes from "./Modal.module.css";
import { BiX } from "react-icons/bi";

const Backdrop = (props) =>{
    return <div className={classes.backdrop} onClick={props.onClick}></div>
};

const ModalOverlay = (props) =>{
    return (
        <div className={`${props.className} ${classes.modal}`}>
            <div className={classes.content}> {props.children}</div>
        </div>
        )
};

//const portalElement = document.getElementById('overlays');
//{ReactDOM.createPortal(<Backdrop onClick = {props.onClick}/>,portalElement)};
//{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)};

const Modal = (props) =>{
    return (
        <Fragment>
            <Backdrop onClick = {props.onClick}/>
            <BiX className={classes.close} onClick={props.onClick}/>
            <ModalOverlay className={props.className}>{props.children}</ModalOverlay>
        </Fragment>
    )
};

export default Modal;