import React from 'react'


// Imports components
import Navbar from "../../components/Navbar/Navbar"
import AboutUs from "../../components/AboutUs/AboutUs"
import CallUs from "../../components/CallUs/CallUs"
import Blogs from "../../components/Blogs/Blogs"
import Brands from "../../components/Brands/Brands"
import Vision from "../../components/Vision/Vision"


import Footer from "../../components/Footer/Footer"
import Care from '../../components/Care/Care'

const About = () => {
    return (
        <div>
            <Navbar />
            <AboutUs />
            <Vision />
            <Care />
            <Blogs />
            <Brands />
            <CallUs />
            <Footer />

        </div>
    )
}

export default About