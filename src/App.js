import './App.css';
import Row from "./Row"
import requests from './requests'
import Banner from './Banner'

function App() {
  return (
    <div className="app">
      {/* TODO: Navbar */}
      {/* TODO: Hero Banner */}
      <Banner />
      <Row
        title="MOVIEFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow = {true}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
