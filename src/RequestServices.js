// import axios from "./axios"

class RequestServices {

  GetOnlyMoviesWithImgPath(request) {
    // <-- Gets only the movies with image path -->
    let resultsArr = [];

    request.data.results.forEach((m) => {
      if (
        m.backdrop_path !== undefined &&
        m.backdrop_path !== null &&
        m.poster_path !== undefined &&
        m.poster_path !== null 
        // && this.TvHasTrailer(m)
      ) {
        resultsArr.push(m);
      }
    });

    return resultsArr;
    // <-- -->
  }

  // TvHasTrailer(movie) {
  //   try {
  //     let trailerurl = axios.get(
  //       `/tv/${movie.id}/videos?api_key=4c88af88c8fc8e1fcf39be46e4317246`
  //     );
  //     console.log(trailerurl)
  //     // if(trailerurl.data.results.length !== 0){
  //     //   return true;
  //     // }
  //     // else{
  //     //   return false;
  //     // }

  //     return true;
  //   }
  //   catch (error) {
  //     console.log(error)
  //     return false;
  //   }
  // }

}

export default new RequestServices();
