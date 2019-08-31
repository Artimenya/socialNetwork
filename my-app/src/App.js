import React, {component} from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import DialogPage from "./components/DialogPage";


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
