import React from 'react';
import { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from './Layout.module.css';
import MainNavigation from "./MainNavigation";
import SecNavigation from "./SecNavigation";

const Layout = (props) =>{
    const bookingStage = useSelector((state) => state.ui.bookingstage);
    console.log(bookingStage);

    return (
        <Fragment >
            {!bookingStage && <MainNavigation />}
            { bookingStage && <SecNavigation />}
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    )

}

export default Layout;