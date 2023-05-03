import {createCard} from "./module/createCard.js";
const api_key = "96931d241e200538d71c52e3e31a5b0e";

let URL = window.location.href;
let movieId = URL.split('=')[1];


const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const title = data.title;
        const description = data.overview;
        const dateRelease = data.release_date;
        data.genres.map(item => {
            const genresNames = item.name;
        })
        data.production_companies.map(item => {
            const companieNames = item.name;
        })
        const backdropPath = `https://image.tmdb.org/t/p/original${data.backdrop_path}`;

        const img = createCard('img', ["bg-scroll"], {src: `${backdropPath}`});

        document.body.appendChild(img);

    })

// const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`;
// fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data.genres);
//         data.genres.map(item => {
//             console.log(item.name);
//             const option = createCard('option',[], {value: `${item.name}`}, `${item.name}`);
//             document.getElementById('filter').appendChild(option);

//         })
        
//     })
//     .catch(error => {
//         console.error(error);
//     });