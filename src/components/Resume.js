import React from 'react'
import { IoBookOutline, IoRocketOutline, IoRibbonOutline } from "react-icons/io5";

const Resume = (props) => {
    const { currPage } = props;
    return (
        <article className={`resume ${(currPage === "resume") && 'active'}`}>
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <IoRocketOutline className='ion-icon' />
                    </div>
                    <h3 className="h3">Experience</h3>
                </div>
                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Amazon Development Centre India Pvt. Ltd</h4>
                        <span>May 2023 - July 2023</span>
                        <p className='timeline-desc-text'>
                            Software Development Engineer Intern
                        </p>
                        <p className="timeline-text">
                            Implemented SMS-based dynamic links, replacing toll-free number, optimizing call page redirection. Reduced FAB rendering time by 35% via bundle size reduction. Employed Module Federation for dependency sharing. Integrated FAB with HRSC via subdomains, cross-account zone delegation. Added subdomain delegation role in HRSC, fixed bugs using AWS SSM parameters.
                        </p>
                    </li>
                </ol>
            </section>
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <IoBookOutline className='ion-icon' />
                    </div>
                    <h3 className="h3">Education</h3>
                </div>
                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Indian Institute of Technology, Guwahati</h4>
                        <span>2022 — 2024</span>
                        <p className="timeline-text">
                            Currently pursuing M.Sc. in Mathematics and Computing at IIT Guwahati, with a current CPI of 10. My studies encompass a blend of advanced mathematical concepts and computational techniques.
                        </p>
                    </li>
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">St. Xavier's College, Kolkata</h4>
                        <span>2019 — 2022</span>
                        <p className="timeline-text">
                            I hold a B.Sc. Mathematics (Honours) degree from St. Xavier's College, Kolkata, achieving a commendable CPI of 8.29.
                        </p>
                    </li>
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Senior Secondary, CBSE Board</h4>
                        <span>2019</span>
                        <p className="timeline-text">
                            Completed my class 12 in the science stream from The Assembly of God Church School, Purulia, attaining a percentage of 95.8.
                        </p>
                    </li>
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Secondary, CBSE Board</h4>
                        <span>2017</span>
                        <p className="timeline-text">
                            Completed my class 10 education at The Assembly of God Church School, Purulia, attaining a perfect 10 CGPA.
                        </p>
                    </li>
                </ol>
            </section>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <IoRibbonOutline className='ion-icon' />
                    </div>

                    <h3 className="h3">My Skills</h3>
                </div>
                <div className="content-card title-wrapper">
                    <ul>
                        <li>
                            <h4 className="h4 timeline-item-title">Programming Languages</h4>
                            <p className="timeline-text">
                                C • C++ • Java • Javascript
                            </p>
                            <br />
                        </li>
                        <li>
                            <h4 className="h4 timeline-item-title">Web Technologies</h4>
                            <p className="timeline-text">
                                HTML • CSS • ReactJS • ExpressJS • NodeJS
                            </p>
                            <br />
                        </li>
                        <li>
                            <h4 className="h4 timeline-item-title">Database Management Systems</h4>
                            <p className="timeline-text">
                                MySQL • MongoDB • AWS Amplify DataStore
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </article >
    )
}

export default Resume