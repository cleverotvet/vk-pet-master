import React from 'react';
import './logo.css'

// картинка импортируется тут, что б ниже отрисоваться
import logo from '../img/logo.jpg'


// Тут отрисовка картинки для петиции

const Logo = () => {
    return (
        <div >
            <img className="logoImage" src={logo} alt="Подпиши петицию"/>
        </div>
    );
};


export default Logo;
