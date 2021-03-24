import React from 'react'

import HeroButton from "./HeroButton"
import "./Hero.css"

function Hero() {
    return (
        <div id="hero" className="Hero">
            <div className="content">
                <img className="logo" src="Background].jpg" alt="narcos background" />
                <h2>Season 2 now available</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
                <div className="button-wrapper">
                    <HeroButton primary={true} text="Watch Now" />
                    <HeroButton primary={false} text="+ My List" />
                </div>
            </div>
            <div className="overlay"></div>
        </div>
    )
}

export default Hero
