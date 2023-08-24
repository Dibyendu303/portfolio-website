import React from 'react'
import designIcon from '../assets/images/icon-design.svg'
import devIcon from '../assets/images/icon-dev.svg'
import appIcon from '../assets/images/icon-app.svg'
import photoIcon from '../assets/images/icon-photo.svg'
import { FaGithub, FaGooglePlay } from "react-icons/fa";

const About = (props) => {
    const { currPage } = props;
    return (
        <article className={`about ${(currPage === "about") && 'active'}`}>
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>
            <section className="about-text">
                <p>
                    I'm Dibyendu Dey, originally from West Bengal. I hold a bachelor's degree in Mathematics from St. Xavier's College, Kolkata, and I'm currently pursuing an M.Sc. in Mathematics and Computing at IIT Guwahati.
                </p>

                <p>
                    My passion lies in web and app development, and I've actively engaged with technologies like ReactJS, MongoDB, NodeJS, and ExpressJS. I've also ventured into cross-platform app development using React Native. I bring practical experience, having undertaken a 2-month internship as a Software Development Engineer Intern at Amazon. During this time, I contributed to projects involving ReactJS, Webpack, Module Federation, AWS CloudWatch, and AWS CDK, further enriching my skill set.
                </p>
                <a className='download-link-text' href='https://drive.google.com/file/d/1l1_8oPkqyJXLM7oz64Op96AtdR6WPw4p/view' target='_blank' rel="noreferrer">
                    Download Resume
                </a>
            </section>
            <section className="service">
                <h3 className="h3 service-title">Projects</h3>
                <ul className="service-list">
                    {/* <li className="service-item">
                        <div className="service-icon-box">
                            <img src={designIcon} alt="design icon" width="40" />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web design</h4>
                            <p className="service-item-text">
                                The most modern and high-quality design made at a professional level.
                            </p>
                        </div>
                    </li> */}
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img src={appIcon} alt="mobile app icon" width="40" />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Secure Messenger</h4>
                            <p className="service-item-text">
                                Developed a real-time encrypted chat application using React Native and AWS Amplify enabling secure real-time messaging, emoji, voice, and image sharing. Integrated group chat, user last seen status, message replies, and message deletion. Leveraged Amplify DataStore for data storage, AWS Cognito for authentication, TweetNacl for encryption.
                            </p>
                            <div className='service-item-links'>
                                <span>
                                    <a className='download-link-text' href='https://play.google.com/store/apps/details?id=com.dibyendu303.securemessenger'>
                                        <FaGooglePlay />
                                        Play Store
                                    </a>
                                </span>
                                <span className='download-link-text'>
                                    <a className='download-link-text' href='https://github.com/Dibyendu303/secure-messenger' target='_blank' rel="noreferrer">
                                        <FaGithub />
                                        Github
                                    </a>
                                </span>
                            </div>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img src={devIcon} alt="Web development icon" width="40" />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Resource Inventory Management Portal</h4>
                            <p className="service-item-text">
                                Created a centralized equipment hub for the Technical Board, IIT Guwahati with enhanced search, JWT authentication, and admin roles. Employed Firebase Storage for document uploads, established streamlined equipment requests with real-time availability checks.
                            </p>
                            <div className='service-item-links'>
                                <span className='download-link-text'>
                                    <a className='download-link-text' href='https://github.com/Coding-Club-IITG/RIM-Portal' target='_blank' rel="noreferrer">
                                        <FaGithub />
                                        Github
                                    </a>
                                </span>
                            </div>
                        </div>
                    </li>
                    {/* <li className="service-item">
                        <div className="service-icon-box">
                            <img src={photoIcon} alt="camera icon" width="40" />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Photography</h4>
                            <p className="service-item-text">
                                I make high-quality photos of any category at a professional level.
                            </p>
                        </div>
                    </li> */}
                </ul>
            </section>
        </article>
    )
}

export default About