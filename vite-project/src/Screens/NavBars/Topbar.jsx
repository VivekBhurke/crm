import React from 'react'
import './Topbar.css'
import sampleImg from '../../Images/Navbar/sampleImg.png'

function Topbar() {
  return (
    <>
      <div className="TopNav">
        <select className='projectSelect' name="projects" id="">
          <option value="project1">Oasis Wellness Spa Project</option>
          <option value="project1">Oasis Wellness Spa Project</option>
          <option value="project1">Oasis Wellness Spa Project</option>
          <option value="project1">Oasis Wellness Spa Project</option>
        </select>

        <div className="searchContainer">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.8667 21.5L12.5167 14.15C11.9333 14.6167 11.2625 14.9861 10.5042 15.2583C9.74583 15.5306 8.93889 15.6667 8.08333 15.6667C5.96389 15.6667 4.17014 14.9326 2.70208 13.4646C1.23403 11.9965 0.5 10.2028 0.5 8.08333C0.5 5.96389 1.23403 4.17014 2.70208 2.70208C4.17014 1.23403 5.96389 0.5 8.08333 0.5C10.2028 0.5 11.9965 1.23403 13.4646 2.70208C14.9326 4.17014 15.6667 5.96389 15.6667 8.08333C15.6667 8.93889 15.5306 9.74583 15.2583 10.5042C14.9861 11.2625 14.6167 11.9333 14.15 12.5167L21.5 19.8667L19.8667 21.5ZM8.08333 13.3333C9.54167 13.3333 10.7812 12.8229 11.8021 11.8021C12.8229 10.7812 13.3333 9.54167 13.3333 8.08333C13.3333 6.625 12.8229 5.38542 11.8021 4.36458C10.7812 3.34375 9.54167 2.83333 8.08333 2.83333C6.625 2.83333 5.38542 3.34375 4.36458 4.36458C3.34375 5.38542 2.83333 6.625 2.83333 8.08333C2.83333 9.54167 3.34375 10.7812 4.36458 11.8021C5.38542 12.8229 6.625 13.3333 8.08333 13.3333Z" fill="#6C6B6B" fill-opacity="0.75"/>
          </svg>
          <input className='SearchField' type="text" name="Search" id="" placeholder='Search modules, configurations, and employe name or ID'/>
        </div>

        <div className="rightMenu">
          <div className="alertContainer">
            <svg width="20" height="26" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.333313 23.3332V20.6665H2.99998V11.3332C2.99998 9.48873 3.55554 7.84984 4.66665 6.4165C5.77776 4.98317 7.2222 4.04428 8.99998 3.59984V2.6665C8.99998 2.11095 9.19442 1.63873 9.58331 1.24984C9.9722 0.860948 10.4444 0.666504 11 0.666504C11.5555 0.666504 12.0278 0.860948 12.4166 1.24984C12.8055 1.63873 13 2.11095 13 2.6665V3.59984C14.7778 4.04428 16.2222 4.98317 17.3333 6.4165C18.4444 7.84984 19 9.48873 19 11.3332V20.6665H21.6666V23.3332H0.333313ZM11 27.3332C10.2666 27.3332 9.63887 27.0721 9.11665 26.5498C8.59442 26.0276 8.33331 25.3998 8.33331 24.6665H13.6666C13.6666 25.3998 13.4055 26.0276 12.8833 26.5498C12.3611 27.0721 11.7333 27.3332 11 27.3332ZM5.66665 20.6665H16.3333V11.3332C16.3333 9.8665 15.8111 8.61095 14.7666 7.5665C13.7222 6.52206 12.4666 5.99984 11 5.99984C9.53331 5.99984 8.27776 6.52206 7.23331 7.5665C6.18887 8.61095 5.66665 9.8665 5.66665 11.3332V20.6665Z" fill="#6C6B6B"/>
            </svg>
          </div>

          <div className="profileContainer">
              <img className='profileImage' src={sampleImg} alt="Profile"/>
              <div className="UserInfo">
                <p className='userName'>John Doe</p>
                <p className='UserEmail'>johndoe@gmail.com</p>
              </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Topbar
