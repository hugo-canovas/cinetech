const api_key = "96931d241e200538d71c52e3e31a5b0e";
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US`


fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    // .catch(error => {
    //     console.error(error);
    // });