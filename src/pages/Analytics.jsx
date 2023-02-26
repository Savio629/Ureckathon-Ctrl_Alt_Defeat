import React from 'react';
import '../styles/modal.css'
import stat from "./stat.png"
import bar from "./bar (2).png"
const Analytics = () => {
    return (
        <>
        
    <div className='stat-class'>
        <img src={stat} width="500"/>
        <img className='st' src={bar} width="500"/>
    </div>
        </>
    );
};

export default Analytics;