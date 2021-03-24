import React from 'react'
import Container from "./Container"

function ContainerArea() {
    return (
        <>
            <Container
                title="Enjoy on your TV"
                description=" Watchx on Smart TVs, Playstation, Xbox,
                Chromecast, Apple TV, Blu-ray players, and
                more."
                imgPath="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                isImgOnRight={true}
            />
            <Container
                title="Download your shows to watch on the go"
                description="Save your data and watch all your favorites offline."
                imgPath="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile.png"
                isImgOnRight={false}
            />
            <Container
                title="Watch everywhere"
                description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
                imgPath="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                isImgOnRight={true}
            />
        </>
    )
}

export default ContainerArea
