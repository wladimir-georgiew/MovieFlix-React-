class RequestServices {
  GetOnlyMoviesWithImgPath(request) {
    // <-- Gets only the movies with image path -->
    let resultsArr = [];

    request.data.results.forEach((m) => {
      if (
        m.backdrop_path !== undefined &&
        m.backdrop_path !== null &&
        m.poster_path !== undefined &&
        m.poster_path !== undefined
      ) {
        resultsArr.push(m);
      }
    });

    return resultsArr;
    // <-- -->
  }
}

export default new RequestServices();
