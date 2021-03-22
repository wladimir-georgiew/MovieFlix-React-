const API_KEY = "4c88af88c8fc8e1fcf39be46e4317246";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  };

  export default requests;