import { createCard } from "./module/createCard.js";
const api_key = "96931d241e200538d71c52e3e31a5b0e";

// Affichage de tous les films
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
fetch(url)
.then((response) => response.json())
.then((data) => {
    // let totalPages = data.total_pages;
    for(let i = 1; i <= 5; i++){
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}&with_watch_monetization_types=flatrate`)
            .then(response => response.json())
            .then(data => {
                let result = data.results;
                result.map(item => {
                        console.log(item);
                        const title = item.title;
                        const img = item.poster_path;
                        const srcImg = `https://image.tmdb.org/t/p/w500${img}`;
                        
                        const newCard = createCard('div', ['flex-column']);
                        const newTitle = createCard('p', ['text-center', 'w-[200px]'], {}, `${title}`);
                        const newImg = createCard('img',['max-w-none', 'w-[200px]', 'h-[300px]'], {src: `${srcImg}`});

                        document.getElementById('allMovies').appendChild(newCard);
                        newCard.appendChild(newImg);
                        newCard.appendChild(newTitle);              
                });
        })
    } 
})
.catch(error => {
    console.error(error);
});