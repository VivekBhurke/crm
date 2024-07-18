import React from 'react';
import './NoInternetScreen.css'
import NoInternet from '../../Images/No Internet/Group (1).png'
const NoInternetScreen = () =>{
         
    return (
        <>
          <div className='no-internet-img'>
               <img src={NoInternet} alt="" />
          </div>
          <div className='no-internet-msg'>
            <h1 className='oops'>Ooops !!!</h1>
            <p className='longmsg'>No internet connection found. Try refreshing the page or
            checking the internet connection.</p>
            <span className='longmss2'>We will see you in a moment :)</span>
          </div>
        </>
    )
}

export default NoInternetScreen;