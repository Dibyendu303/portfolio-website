import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'

const Home = () => {
    const [currPage, setCurrPage] = useState("about");
    return (
        <main>
            <Sidebar />
            <div className="main-content">
                <Navbar currPage={currPage} setCurrPage={setCurrPage} />
                <About currPage={currPage} />
                <Resume currPage={currPage} />
                <Contact currPage={currPage} />
            </div>
        </main>
    )
}

export default Home