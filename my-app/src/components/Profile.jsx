import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return  <div className='content'>

        <div  className={s.img}>

        </div>

        <div>
            ava + description
        </div>

        <div >
            My posts
            <div >
                New Post
            </div>
            <div className= {s.item} >
                <div className='item'> Post 1</div>
                <div className='item'> Post 2</div>
            </div>
        </div>

    </div>
}
export  default  Profile;