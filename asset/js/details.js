import {createCard} from "./module/createCard.js";
const api_key = "96931d241e200538d71c52e3e31a5b0e";

const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`;
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.genres);
        data.genres.map(item => {
            console.log(item.name);
            const option = createCard('option',[], {value: `${item.name}`}, `${item.name}`);
            document.getElementById('filter').appendChild(option);

        })
        
    })
    .catch(error => {
        console.error(error);
    });