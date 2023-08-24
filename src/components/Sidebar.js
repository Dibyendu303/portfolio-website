import React, { useState } from 'react'
import portfolioAvatar from '../assets/images/portfolio_avatar.png'
import { IoChevronDown, IoMailOutline, IoPhonePortraitOutline, IoLocationOutline, IoLogoLinkedin, IoLogoGithub, IoCodeSlashOutline } from "react-icons/io5";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <aside className={`sidebar ${showSidebar && 'active'}`}>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src={portfolioAvatar} alt="Dibyendu Dey" width="80" />
                </figure>
                <div className="info-content">
                    <h1 className="name" title='Dibyendu Dey'>Dibyendu Dey</h1>
                    <p className="title">Software Development Engineer</p>
                </div>
                <button className="info_more-btn" onClick={() => setShowSidebar(!showSidebar)}>
                    <span>Show Contacts</span>
                    <IoChevronDown className='ion-icon' />
                </button>
            </div>
            <div className="sidebar-info_more">
                <div className="separator"></div>

                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            <IoMailOutline className='ion-icon' />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Email</p>
                            <a href="mailto:dibyendudey303@gmail.com" className="contact-link">dibyendudey303@gmail.com</a>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <IoPhonePortraitOutline className='ion-icon' />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Phone</p>
                            <a href="tel:+918597890618" className="contact-link">+91 859 789 0618</a>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <IoLocationOutline className='ion-icon' />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Location</p>
                            <address>Purulia, West Bengal, India</address>
                        </div>
                    </li>
                </ul>

                <div className="separator"></div>

                <ul className="social-list">
                    <li className="social-item">
                        <a href="https://www.linkedin.com/in/dibyendu303/" className="social-link">
                            <IoLogoLinkedin className='ion-icon' />
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="https://github.com/Dibyendu303" className="social-link">
                            <IoLogoGithub className='ion-icon' />
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="https://leetcode.com/Dibyendu303/" className="social-link">
                            <IoCodeSlashOutline className='ion-icon' />
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar