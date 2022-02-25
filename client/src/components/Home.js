import React from "react";
import './styles/Home.css';
import Logo from '../wiwi.png'

const Home = () =>{
    return (
        <div className='container'>
            <div className='logo'>
                <img src={Logo} alt='Wiwi logo'/>
            </div>
            <div className='text'>
                <h1 className='title'>¡Welcome!</h1>
            </div>
        </div>
    )
}

export default Home