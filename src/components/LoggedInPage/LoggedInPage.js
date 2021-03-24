import React from 'react'

import requests from "../../requests";

import Banner from "./Banner/Banner";
import Row from "./Row/Row";
import "./LoggedInPage.css"

function LoggedInPage() {
    return (
        <div className="body-wrapper_loggedIn">
            <Banner />
            <Row
                title="MOVIEFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow={true}
            />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}

export default LoggedInPage

