
import React from 'react';
import './ErrorMsg.css'
import error from '../../Images/Error/Error.png'

const ErrorMsg = () =>{

    return (
        <div>
            <div className='error-img'>
                <img src={error} alt="" />
            </div>
            <div className='error-msg'>
            Feeling lost? Time to go back <span>home</span> 
            </div>
        </div>
    )
}

export default ErrorMsg;