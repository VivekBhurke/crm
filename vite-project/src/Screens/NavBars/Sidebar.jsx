import React from 'react'
import './Sidebar.css'
import logo from '../../Images/LoginPage/logo.png'
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <>
            <nav className="Navcontainer">
                <div className='NavHead'>
                    <img src={logo} alt="" />
                    <h3>AV Digital Solution</h3>
                </div>
                <div className="upperLinks">
                    <div className='ListItem'>
                        <Link className="navLink" to="/">
                            <div className="linkContainer">
                                <div className="svgContainer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 19H9V13H15V19H18V10L12 5.5L6 10V19ZM4 21V9L12 3L20 9V21H13V15H11V21H4Z" />
                                    </svg>
                                </div>
                                <div className="link">
                                    Dashboard
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='ListItem'>
                        <Link className="navLink" to="/LeadCenter">
                            <div className="linkContainer">
                                <div className="svgContainer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 22C3.45 22 2.97917 21.8042 2.5875 21.4125C2.19583 21.0208 2 20.55 2 20V9C2 8.45 2.19583 7.97917 2.5875 7.5875C2.97917 7.19583 3.45 7 4 7H9V4C9 3.45 9.19583 2.97917 9.5875 2.5875C9.97917 2.19583 10.45 2 11 2H13C13.55 2 14.0208 2.19583 14.4125 2.5875C14.8042 2.97917 15 3.45 15 4V7H20C20.55 7 21.0208 7.19583 21.4125 7.5875C21.8042 7.97917 22 8.45 22 9V20C22 20.55 21.8042 21.0208 21.4125 21.4125C21.0208 21.8042 20.55 22 20 22H4ZM4 20H20V9H15C15 9.55 14.8042 10.0208 14.4125 10.4125C14.0208 10.8042 13.55 11 13 11H11C10.45 11 9.97917 10.8042 9.5875 10.4125C9.19583 10.0208 9 9.55 9 9H4V20ZM6 18H12V17.55C12 17.2667 11.9208 17.0042 11.7625 16.7625C11.6042 16.5208 11.3833 16.3333 11.1 16.2C10.7667 16.05 10.4292 15.9375 10.0875 15.8625C9.74583 15.7875 9.38333 15.75 9 15.75C8.61667 15.75 8.25417 15.7875 7.9125 15.8625C7.57083 15.9375 7.23333 16.05 6.9 16.2C6.61667 16.3333 6.39583 16.5208 6.2375 16.7625C6.07917 17.0042 6 17.2667 6 17.55V18ZM14 16.5H18V15H14V16.5ZM9 15C9.41667 15 9.77083 14.8542 10.0625 14.5625C10.3542 14.2708 10.5 13.9167 10.5 13.5C10.5 13.0833 10.3542 12.7292 10.0625 12.4375C9.77083 12.1458 9.41667 12 9 12C8.58333 12 8.22917 12.1458 7.9375 12.4375C7.64583 12.7292 7.5 13.0833 7.5 13.5C7.5 13.9167 7.64583 14.2708 7.9375 14.5625C8.22917 14.8542 8.58333 15 9 15ZM14 13.5H18V12H14V13.5ZM11 9H13V4H11V9Z" />
                                </svg></div>
                                <div className="link">Lead Center</div>
                            </div>
                        </Link>
                    </div>
                    <div className='ListItem'>
                        <Link className="navLink" to="/Chat">
                            <div className="linkContainer">
                                <div className="svgContainer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V16H16C15.5 16.6333 14.9042 17.125 14.2125 17.475C13.5208 17.825 12.7833 18 12 18C11.2167 18 10.4792 17.825 9.7875 17.475C9.09583 17.125 8.5 16.6333 8 16H5V19ZM12 16C12.6333 16 13.2083 15.8167 13.725 15.45C14.2417 15.0833 14.6 14.6 14.8 14H19V5H5V14H9.2C9.4 14.6 9.75833 15.0833 10.275 15.45C10.7917 15.8167 11.3667 16 12 16Z" />
                                </svg></div>
                                <div className="link">Message</div>
                            </div>
                        </Link>
                    </div>
                    <div className='ListItem'>
                        <Link className="navLink" to="#">
                            <div className="linkContainer">
                                <div className="svgContainer"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18C8.45 18 7.97917 17.8042 7.5875 17.4125C7.19583 17.0208 7 16.55 7 16V4C7 3.45 7.19583 2.97917 7.5875 2.5875C7.97917 2.19583 8.45 2 9 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H9ZM9 16H18V4H9V16ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6H5V20H16V22H5Z" />
                                </svg></div>
                                <div className="link">Content</div>
                            </div>
                        </Link>
                    </div>
                    <div className='ListItem'>
                        <Link className="navLink" to="#">
                            <div className="linkContainer">
                                <div className="svgContainer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8ZM12 14C11.7167 14 11.4792 13.9042 11.2875 13.7125C11.0958 13.5208 11 13.2833 11 13C11 12.7167 11.0958 12.4792 11.2875 12.2875C11.4792 12.0958 11.7167 12 12 12C12.2833 12 12.5208 12.0958 12.7125 12.2875C12.9042 12.4792 13 12.7167 13 13C13 13.2833 12.9042 13.5208 12.7125 13.7125C12.5208 13.9042 12.2833 14 12 14ZM8 14C7.71667 14 7.47917 13.9042 7.2875 13.7125C7.09583 13.5208 7 13.2833 7 13C7 12.7167 7.09583 12.4792 7.2875 12.2875C7.47917 12.0958 7.71667 12 8 12C8.28333 12 8.52083 12.0958 8.7125 12.2875C8.90417 12.4792 9 12.7167 9 13C9 13.2833 8.90417 13.5208 8.7125 13.7125C8.52083 13.9042 8.28333 14 8 14ZM16 14C15.7167 14 15.4792 13.9042 15.2875 13.7125C15.0958 13.5208 15 13.2833 15 13C15 12.7167 15.0958 12.4792 15.2875 12.2875C15.4792 12.0958 15.7167 12 16 12C16.2833 12 16.5208 12.0958 16.7125 12.2875C16.9042 12.4792 17 12.7167 17 13C17 13.2833 16.9042 13.5208 16.7125 13.7125C16.5208 13.9042 16.2833 14 16 14ZM12 18C11.7167 18 11.4792 17.9042 11.2875 17.7125C11.0958 17.5208 11 17.2833 11 17C11 16.7167 11.0958 16.4792 11.2875 16.2875C11.4792 16.0958 11.7167 16 12 16C12.2833 16 12.5208 16.0958 12.7125 16.2875C12.9042 16.4792 13 16.7167 13 17C13 17.2833 12.9042 17.5208 12.7125 17.7125C12.5208 17.9042 12.2833 18 12 18ZM8 18C7.71667 18 7.47917 17.9042 7.2875 17.7125C7.09583 17.5208 7 17.2833 7 17C7 16.7167 7.09583 16.4792 7.2875 16.2875C7.47917 16.0958 7.71667 16 8 16C8.28333 16 8.52083 16.0958 8.7125 16.2875C8.90417 16.4792 9 16.7167 9 17C9 17.2833 8.90417 17.5208 8.7125 17.7125C8.52083 17.9042 8.28333 18 8 18ZM16 18C15.7167 18 15.4792 17.9042 15.2875 17.7125C15.0958 17.5208 15 17.2833 15 17C15 16.7167 15.0958 16.4792 15.2875 16.2875C15.4792 16.0958 15.7167 16 16 16C16.2833 16 16.5208 16.0958 16.7125 16.2875C16.9042 16.4792 17 16.7167 17 17C17 17.2833 16.9042 17.5208 16.7125 17.7125C16.5208 17.9042 16.2833 18 16 18Z" />
                                </svg></div>
                                <div className="link">Planner</div>
                            </div>
                        </Link>
                    </div>
                    <div className='ListItem'>
                        <Link className="navLink" to="#">
                            <div className="linkContainer">
                                <div className="svgContainer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 13V11H20V13H16ZM17.2 20L14 17.6L15.2 16L18.4 18.4L17.2 20ZM15.2 8L14 6.4L17.2 4L18.4 5.6L15.2 8ZM3 15V9H7L12 4V20L7 15H3ZM10 8.85L7.85 11H5V13H7.85L10 15.15V8.85Z" />
                                </svg></div>
                                <div className="link">Ads</div>
                            </div>
                        </Link>
                    </div>
                </div>


                <div className="bottomLink">
                    <div className='ListItem'>
                        <Link className="navLink" to="#">
                            <div className="linkContainer">
                                <div className="svgContainer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.2502 22L8.8502 18.8C8.63353 18.7167 8.42936 18.6167 8.2377 18.5C8.04603 18.3833 7.85853 18.2583 7.6752 18.125L4.7002 19.375L1.9502 14.625L4.5252 12.675C4.50853 12.5583 4.5002 12.4458 4.5002 12.3375V11.6625C4.5002 11.5542 4.50853 11.4417 4.5252 11.325L1.9502 9.375L4.7002 4.625L7.6752 5.875C7.85853 5.74167 8.0502 5.61667 8.2502 5.5C8.4502 5.38333 8.6502 5.28333 8.8502 5.2L9.2502 2H14.7502L15.1502 5.2C15.3669 5.28333 15.571 5.38333 15.7627 5.5C15.9544 5.61667 16.1419 5.74167 16.3252 5.875L19.3002 4.625L22.0502 9.375L19.4752 11.325C19.4919 11.4417 19.5002 11.5542 19.5002 11.6625V12.3375C19.5002 12.4458 19.4835 12.5583 19.4502 12.675L22.0252 14.625L19.2752 19.375L16.3252 18.125C16.1419 18.2583 15.9502 18.3833 15.7502 18.5C15.5502 18.6167 15.3502 18.7167 15.1502 18.8L14.7502 22H9.2502ZM11.0002 20H12.9752L13.3252 17.35C13.8419 17.2167 14.321 17.0208 14.7627 16.7625C15.2044 16.5042 15.6085 16.1917 15.9752 15.825L18.4502 16.85L19.4252 15.15L17.2752 13.525C17.3585 13.2917 17.4169 13.0458 17.4502 12.7875C17.4835 12.5292 17.5002 12.2667 17.5002 12C17.5002 11.7333 17.4835 11.4708 17.4502 11.2125C17.4169 10.9542 17.3585 10.7083 17.2752 10.475L19.4252 8.85L18.4502 7.15L15.9752 8.2C15.6085 7.81667 15.2044 7.49583 14.7627 7.2375C14.321 6.97917 13.8419 6.78333 13.3252 6.65L13.0002 4H11.0252L10.6752 6.65C10.1585 6.78333 9.67936 6.97917 9.2377 7.2375C8.79603 7.49583 8.39186 7.80833 8.0252 8.175L5.5502 7.15L4.5752 8.85L6.7252 10.45C6.64186 10.7 6.58353 10.95 6.5502 11.2C6.51686 11.45 6.5002 11.7167 6.5002 12C6.5002 12.2667 6.51686 12.525 6.5502 12.775C6.58353 13.025 6.64186 13.275 6.7252 13.525L4.5752 15.15L5.5502 16.85L8.0252 15.8C8.39186 16.1833 8.79603 16.5042 9.2377 16.7625C9.67936 17.0208 10.1585 17.2167 10.6752 17.35L11.0002 20ZM12.0502 15.5C13.0169 15.5 13.8419 15.1583 14.5252 14.475C15.2085 13.7917 15.5502 12.9667 15.5502 12C15.5502 11.0333 15.2085 10.2083 14.5252 9.525C13.8419 8.84167 13.0169 8.5 12.0502 8.5C11.0669 8.5 10.2377 8.84167 9.5627 9.525C8.8877 10.2083 8.5502 11.0333 8.5502 12C8.5502 12.9667 8.8877 13.7917 9.5627 14.475C10.2377 15.1583 11.0669 15.5 12.0502 15.5Z"/>
                                    </svg>

                                </div>
                                <div className="link">
                                    Settings
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='ListItem'>
                        <Link className="navLink" to="#">
                            <div className="linkContainer">
                                <div className="svgContainer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H12V5H5V19H12V21H5ZM16 17L14.625 15.55L17.175 13H9V11H17.175L14.625 8.45L16 7L21 12L16 17Z"/>
                                </svg>
                                </div>
                                <div className="link">Log out</div>
                            </div>
                        </Link>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Sidebar