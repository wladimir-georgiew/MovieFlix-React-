import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import requests from "./requests";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Banner />
      <Row
        title="MOVIEFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
