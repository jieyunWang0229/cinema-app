import React, {Fragment, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../Store/ui-slice';
import { authActions } from '../../Store/auth-slice';
import classes from './MainNavigation.module.css';
import { IoIosMenu } from "react-icons/io";

const MainNavigation = (props) =>{
    const [showMobilemenu, setShowMobileMenu] = useState(false);
    const dispatch = useDispatch();
    const bookingStage = useSelector( (state) => state.ui.bookingstage );
    const isLogin = useSelector(state => state.auth.isLoggedIn);
    const openLogFormHander=()=>{
        dispatch(uiActions.toggleLogForm());
    };
    const logoutHandler = () =>{
        dispatch(authActions.logout());
    }
    const mobileMenuHandler = () =>{
        setShowMobileMenu(preSate => !preSate);
    }

    return (
        <Fragment>
    
            <header className={classes.header}>
                <div className={classes.logo}>
                    <NavLink to='/'>BUBO</NavLink>
                </div>
            <nav className={classes.nav}>
                            <li>
                                <NavLink to='/movies' className={navData => navData.isActive ? classes.active :''}>
                                    Movies
                                </NavLink>
                            </li>

                            <li>
                                <NavLink  to='/' className={navData => navData.isActive ? classes.active :''}>
                                More
                                </NavLink>
                            </li>

                            <li>
                                { isLogin && <NavLink   to='/mytickets' className={navData => navData.isActive ? classes.active :''}>
                                My Ticket
                                </NavLink>}
                            </li>
                    
                    
                </nav>
                
                <div className={classes.login} >
                    {!isLogin && <button onClick={openLogFormHander}>Login </button>}
                    {isLogin && <button onClick={logoutHandler}> Logout </button>}
            
                </div>
                <div  className={classes.moblieicon}>
                    <IoIosMenu onClick={mobileMenuHandler}/>
                </div>
                

            </header>

            {showMobilemenu && <div className={classes.mobliemenu}>
                <nav className={classes.mobilenav}>
                            <li onClick={mobileMenuHandler}>
                                <NavLink to='/movies' className={navData => navData.isActive ? classes.active :''}>
                                    Movies
                                </NavLink>
                            </li>

                            <li onClick={mobileMenuHandler}>
                                <NavLink  to='/' className={navData => navData.isActive ? classes.active :''}>
                                More
                                </NavLink>
                            </li>

                            <li onClick={mobileMenuHandler}>
                                { isLogin && <NavLink   to='/mytickets' className={navData => navData.isActive ? classes.active :''}>
                                My Ticket
                                </NavLink>}
                            </li>
                    
                    
                </nav>
                <div className={classes.mobilelogin} >
                {!isLogin && <button onClick={openLogFormHander}>Login </button>}
                {isLogin && <button onClick={logoutHandler}> Logout </button>}
        
                 </div>

            </div>}

        </Fragment>
    )

}

export default MainNavigation;