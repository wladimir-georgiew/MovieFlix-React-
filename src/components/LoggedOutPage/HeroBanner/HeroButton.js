import React from 'react'

import "./HeroButton.css"

function HeroButton(props) {
    return (
        <a href="#" className="Button" data-primary={props.primary}>{props.text}</a>
    )
}

export default HeroButton
