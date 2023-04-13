import React from 'react';
import './Header.css';

export default ({Black}) => {
    return (
        <header className={Black ? 'black' : ''}>
            <div className='HeaderLogo'> 
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg' alt='meteflix'></img>
                </a>
            </div>
            <div className='User'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='user'></img>
                </a>
            </div>
        </header>
    )
}