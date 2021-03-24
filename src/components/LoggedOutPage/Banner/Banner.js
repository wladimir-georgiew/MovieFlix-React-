import React from 'react'
import "./Banner.css"

function Banner() {
    return (
        <div className="main">
            <div className="area">
                <h1>Unlimited movies, TV <br/>shows, and more.</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>

                <div className="search">
                    <input type="text" className="box" placeholder="Email"/>
                    
                    <span className="try">
                    Try 30 days free <i className="fas fa-chevron-right"></i>
                    </span>

                </div>
                <h4>Ready to watch? Enter your email to create or access your account</h4>
            </div>

     </div>
    )
}

export default Banner
