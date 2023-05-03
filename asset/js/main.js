import {createCard} from "./module/createCard.js";
const api_key = "96931d241e200538d71c52e3e31a5b0e";

// Affichage des films dernièrement sorti
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US`;
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let totalPages = data.total_pages;
        for(let i = 1; i <= totalPages; i++){
            fetch(`${url}&page=${i}`)
                .then(response => response.json())
                .then(data => {
                    let result = data.results;
                    result.map(item => {
                        if(item.popularity >= 300){
                            console.log(item);
                            const title = item.title;
                            const img = item.poster_path;
                            const srcImg = `https://image.tmdb.org/t/p/w500${img}`;
                            const movieDetails = `details.html?movie=${item.id}`;
                                
                            const newCard = createCard('div', ['flex-column', 'h-[350px]']);
                            const newPath = createCard('a', [], {href: `${movieDetails}`})
                            const newTitle = createCard('p', ['text-center', 'w-[200px]'], {}, `${title}`);
                            const newImg = createCard('img',['max-w-none', 'w-[200px]', 'h-[300px]'], {src: `${srcImg}`});
    
                            document.getElementById('nowPlaying').appendChild(newCard);
                            newCard.appendChild(newPath);
                            newPath.appendChild(newImg);
                            newPath.appendChild(newTitle);                        
                        }
                    });
                })
        };
    })
    .catch(error => {
        console.error(error);
    });


//Affichages des films les mieux notés
const urlRating = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US`;
fetch(urlRating)
    .then(response => response.json())
    .then(data => {
        let totalPages = data.total_pages;
        // for(let i = 1; i <= `${totalPages}`; i++){
        for(let i = 1; i <= 5; i++){
            fetch(urlRating+"&page="+i)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                let result = data.results;
                result.map(item => {
                    const title = item.title;
                    const img = item.poster_path;
                    const srcImg = `https://image.tmdb.org/t/p/w500${img}`;

                    const newCard = createCard('div', ['flex-column', 'h-[350px]']);
                    const newTitle = createCard('p', ['text-center', 'w-[200px]'], {}, `${title}`);
                    const newImg = createCard('img',['max-w-none', 'w-[200px]', 'h-[300px]'], {src: `${srcImg}`});

                    document.getElementById('topRated').appendChild(newCard);
                    newCard.appendChild(newImg);
                    newCard.appendChild(newTitle);                        
                });
            })
        }
    })
    .catch(error => {
        console.error(error);
    });


//Affichages des films à venir
const urlComing = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US`;
fetch(urlComing)
    .then(response => response.json())
    .then(data => {
        let totalPages = data.total_pages;
        for(let i = 1; i <= 5; i++){
            fetch(urlComing+"&page="+i)
            .then(response => response.json())
            .then(data => {
                let result = data.results;
                result.map(item => {
                    const title = item.title;
                    const img = item.poster_path;
                    const srcImg = `https://image.tmdb.org/t/p/w500${img}`;

                    const newCard = createCard('div', ['flex-column', 'h-[350px]']);
                    const newTitle = createCard('p', ['text-center', 'w-[200px]'], {}, `${title}`);
                    const newImg = createCard('img',['max-w-none', 'w-[200px]', 'h-[300px]'], {src: `${srcImg}`});

                    document.getElementById('upComing').appendChild(newCard);
                    newCard.appendChild(newImg);
                    newCard.appendChild(newTitle);                        
                });
            })
        }
    })
    .catch(error => {
        console.error(error);
    });

const urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US`;
fetch(urlPopular)
    .then(response => response.json())
    .then(data => {
        let totalPages = data.total_pages;
        for(let i = 1; i <= 5; i++){
            fetch(urlPopular+"&page="+i)
            .then(response => response.json())
            .then(data => {
                let result = data.results;
                result.map(item => {
                    const title = item.title;
                    const img = item.poster_path;
                    const srcImg = `https://image.tmdb.org/t/p/w500${img}`;

                    const newCard = createCard('div', ['flex-column', 'h-[350px]']);
                    const newTitle = createCard('p', ['text-center', 'w-[200px]'], {}, `${title}`);
                    const newImg = createCard('img',['max-w-none', 'w-[200px]', 'h-[300px]'], {src: `${srcImg}`});

                    document.getElementById('Popular').appendChild(newCard);
                    newCard.appendChild(newImg);
                    newCard.appendChild(newTitle);                        
                });
            })
        }
    })
    .catch(error => {
        console.error(error);
    });

