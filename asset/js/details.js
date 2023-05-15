import {createCard} from "./module/createCard.js";
const api_key = "96931d241e200538d71c52e3e31a5b0e";

let URL = window.location.href;
let movieId = URL.split('=')[1];



const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const title = data.title;
        const description = data.overview;
        const dateRelease = data.release_date;
        const backdropPath = `https://image.tmdb.org/t/p/original${data.backdrop_path}`;

        const img = createCard('img', ["h-full", "opacity-90", "dark:opacity-80"], {src: `${backdropPath}`});
        const movieTitle = createCard('h1', ["absolute", "top-52", "text-2xl"], {}, `${title}`);
        const movieDescription = createCard('p', ["absolute", "top-64", "w-[33rem]"], {}, `${description}`);
        const movieRelease = createCard('p', ["absolute", "top-96"], {}, `${dateRelease}`);

        document.getElementById('movieDetails').appendChild(img);
        document.getElementById('movieDetails').appendChild(movieTitle);
        document.getElementById('movieDetails').appendChild(movieDescription);
        document.getElementById('movieDetails').appendChild(movieRelease);
        // console.log(data.genres);
        data.genres.map(item => {
            const genresNames = item.name;
            const movieGenre = createCard('p', [], {}, `${genresNames}`);
            movieRelease.appendChild(movieGenre);
            let genresId = [];
            genresId.push(`${item.id}`);
            const similarMovieGenre = createCard('h2', [], {}, `${genresNames}`);
            document.getElementById('genreSimilar').appendChild(similarMovieGenre);
            genresId.map(item => {
                fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${api_key}&language=en-US`)
                    .then((response) => response.json())
                    .then((data) => {
                        const totalPages = data.total_pages;
                        const newContainer = createCard('div', ['flex', 'overflow-x-scroll', 'overflow-y-hidden', 'gap-5', 'w-full', 'pt-8', 'dark:bg-gray-800', 'dark:text-white']);
                        for(let i = 1; i <= totalPages; i++){
                            fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${api_key}&language=en-US&page=${i}`)
                            .then(response => response.json())
                            .then(data => {
                                data.results.map(result => {
                                    for(const key in result.genre_ids){
                                        if(genresId == result.genre_ids[key]){
                                            if(result.popularity >= 50){
                                                // console.log(result);
                                                const similarMovieTitle = result.title;
                                                const similarMovieImg = result.poster_path;
                                                const similarMovieSrcImg = `https://image.tmdb.org/t/p/w500${similarMovieImg}`;
                                                const similarMovieDetails = `details.html?movie=${result.id}`;
                                                
                                                const newCard = createCard('div', ['flex-column', 'h-[350px]']);
                                                const newPath = createCard('a', [], {href: `${similarMovieDetails}`})
                                                const newTitle = createCard('p', ['text-center', 'w-[200px]'], {}, `${similarMovieTitle}`);
                                                const newImg = createCard('img',['max-w-none', 'w-[200px]', 'h-[300px]'], {src: `${similarMovieSrcImg}`});

                                                similarMovieGenre.appendChild(newContainer);
                                                newContainer.appendChild(newCard);
                                                newCard.appendChild(newPath);
                                                newPath.appendChild(newImg);
                                                newPath.appendChild(newTitle);
                                            }
                                        }
                                    }                        
                                })
                            })
                        // console.log(i);
                    }
                })
            })
        })

        data.production_companies.map(item => {
            const companieNames = item.name;
            // console.log(item);
            const movieCompanie = createCard('p', [], {}, `${companieNames}`);
            movieRelease.appendChild(movieCompanie);
        })


    })

const urlCast = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}`;
fetch(urlCast)
    .then((response) => response.json())
    .then((data) => {
        data.cast.map(item => {
            const voiceCharacter = item.character;
            const actorName = item.name;
            const actorImg = `https://image.tmdb.org/t/p/original${item.profile_path}`;

            const newCard = createCard('div', ['flex-column', 'h-[370px]']);
            // const newPath = createCard('a', [], {href: `${movieDetails}`})
            const castCharacter = createCard('p', ['text-center',"text-xs", 'w-[200px]'], {}, `${voiceCharacter}`);
            const castName = createCard('p', ['text-center', 'w-[200px]'], {}, `${actorName}`);
            const castImg = createCard('img',['max-w-none', 'w-[200px]', 'h-[300px]'], {src: `${actorImg}`});

            document.getElementById('movieCaster').appendChild(newCard);
            newCard.appendChild(castCharacter);
            newCard.appendChild(castImg);
            newCard.appendChild(castName);
        })
    })
    .catch(error => {
        console.error(error);
    });

const urlVideo = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}&language=fr-FR`;
fetch(urlVideo)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })