import React from 'react';
import s from './Navbar.module.css';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailOutline from '@material-ui/icons/MailOutline';




const Navbar = () => {
    return <nav className={s.nav}>
        <div  className={s.item}>
            <AccountCircle/>
            <a> Profile</a>
        </div>
        <div className={s.item}>
            <MailOutline/>
            <a> Messages</a>
        </div>
        <div className={s.item} >
            <a> News </a>
        </div>
        <div  className={s.item}>
            <a> Music </a>
        </div>
        <div className={s.item} >
            <a> Settings </a>
        </div>
    </nav>
}
export  default  Navbar;