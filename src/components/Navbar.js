import React from 'react'

const Navbar = (props) => {
    const { currPage, setCurrPage } = props;
    const handleClick = (pageName) => {
        setCurrPage(pageName);
        window.scrollTo(0, 0);
    }
    return (
        <nav className='navbar'>
            <ul className="navbar-list">
                <li className="navbar-item">
                    <button className={`navbar-link ${(currPage === "about") && 'active'}`} onClick={() => handleClick("about")}>About</button>
                </li>
                <li className="navbar-item">
                    <button className={`navbar-link ${(currPage === "resume") && 'active'}`} onClick={() => handleClick("resume")} >Resume</button>
                </li>
                {/* <li className="navbar-item">
                    <button className="navbar-link">Portfolio</button>
                </li>
                <li className="navbar-item">
                    <button className="navbar-link">Blog</button>
                </li> */}
                <li className="navbar-item">
                    <button className={`navbar-link ${(currPage === "contact") && 'active'}`} onClick={() => handleClick("contact")} >Contact</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar