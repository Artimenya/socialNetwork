import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return(


            <div className={s.item}>
                <img src= 'http://sun9-6.userapi.com/c841238/v841238681/3c5cc/mMwyKxYD1tc.jpg?ava=1'/>
                {props.message}
                <div>
                    <span> {props.rating} </span>
                </div>

            </div>
    )

}
export  default  Post;