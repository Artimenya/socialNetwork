import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return  <div className='content'>

        <div  className={s.img}>

        </div>

        <div>
            ava + description
        </div>
        <MyPosts/>

    </div>
}
export  default  Profile;