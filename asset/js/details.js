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

const urlGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`;
fetch(urlGenres)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.genres);
        data.genres.map(item => {
            // console.log(item.id);
            // console.log(item.name);
        })
        
    })
    .catch(error => {
        console.error(error);
    });

const urlCast = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}`;
fetch(urlCast)
    .then((response) => response.json())
    .then((data) => {
        data.cast.map(item => {
            const voiceCharacter = item.character;
            const actorName = item.name;
            const actorImg = item.profile_path;
        })
    })
    .catch(error => {
        console.error(error);
    });

const urlSimilar = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${api_key}&language=en-US`;
fetch(urlSimilar)
    .then((response) => response.json())
    .then((data) => {
        let totalPages = data.total_pages;
        for(let i = 1; i <= totalPages; i++){
            fetch(`${urlSimilar}&page=${i}`)
                .then(response => response.json())
                .then(data => {
                    data.results.map(item => {
                        if(item.popularity > 150){
                            item.genre_ids.map(id => {
                                if(id = 16){
                                    console.log(item.title);
                                }
                            })
                        }
                    })
                })
        }
    })
    .catch(error => {
        console.error(error);
    });