import React, {component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogPage from "./components/DialogPage/DialogPage";


const App = () => {
    return (
        <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        {/*<DialogPage/>*/}
        <Profile/>



        </div>);
}
export default App;
