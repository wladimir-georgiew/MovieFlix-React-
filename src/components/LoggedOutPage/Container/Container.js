import React from 'react'
import "./Container.css"

function Container( {title, description, imgPath, isImgOnRight } ) {
    return (
        <div className="container1">
            {/* Render only if the image is on the left side */}
            {isImgOnRight === false &&
                <div className="image">
                    <img src={imgPath} />
                </div>
            }
            <div className="text">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            {/* Render only if the image is on the right side */}
            {isImgOnRight === true &&
                <div className="image">
                    <img src={imgPath} />
                </div>
            }
            
        </div>
    )
}

export default Container
