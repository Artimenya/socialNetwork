import React from 'react';
import s from './DialogPage.module.css';

const DialogPage = () => {
    return <div className={s.content}>

        <div className={s.wrapper}>

<div>
            <h1> Dialog </h1>

                <ul>
                    <li>
                        Andrew
                    </li>
                </ul>
                <ul >
                    <li>
                        Dmitri
                    </li>
                </ul>
                <ul className={s.child}>
                    <li>
                        Sasha
                    </li>
                </ul>
                <ul>
                    <li>
                        Sveta
                    </li>
                </ul>
                <ul>
                    <li>
                        Valera
                    </li>
                </ul>
                <ul>
                    <li>
                        Viktor
                    </li>
                </ul>
                <ul>
                    <li>
                        This is a list item
                    </li>
                </ul>
                <ul>
                    <li>
                        Another list item
                    </li>
                </ul>




            </div>
</div>


    </div>

}
export default DialogPage;