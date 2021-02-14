import React from 'react'
import SideBar from './SideBar'
import Main from './Main'
import Footer from './Footer'


const Content = props => {
    return (
    <main>
        <SideBar/>
        <Main/>
        <Footer/>
    </main>
    )
}

export default Content