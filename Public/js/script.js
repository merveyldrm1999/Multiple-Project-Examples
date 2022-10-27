

function getMovie(params) {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cb63bdd3b821a239c92b600c0635fad4&language=tr-TR&page=1").then((res) => {

        const apiMovie = res.data.results;
        apiMovie.map((val) => {
            const cloneMovieCompt = document.getElementsByClassName("movie")[0].cloneNode(true);
            cloneMovieCompt.classList.remove("movie");
            cloneMovieCompt.classList.remove("d-none");
            cloneMovieCompt.getElementsByClassName("movie-img")[0].src = "https://image.tmdb.org/t/p/w220_and_h330_face/" + val.backdrop_path;
            cloneMovieCompt.getElementsByClassName("movie-title")[0].innerHTML = val.title;
            cloneMovieCompt.getElementsByClassName("movie-date")[0].innerHTML = val.release_date;
            document.getElementById("full-movie").appendChild(cloneMovieCompt)
        })

    })
}