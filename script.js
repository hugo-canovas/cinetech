const api_key = "96931d241e200538d71c52e3e31a5b0e";

// Affichage des films dernièrement sorti
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US`
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data.results);
        const newContainer = document.createElement('div');
        newContainer.style.display = "flex";
        newContainer.style.gap = "8px";
        document.body.append(newContainer);
        let result = data.results;
            result.map(item => {
                // console.log(item.title);
                const newDiv = document.createElement('div');
                const newContent = document.createTextNode(item.title);
                const newImg = document.createElement('img');
                newImg.src = `https://image.tmdb.org/t/p/w200${item.poster_path}`;
                newContainer.append(newImg);
                newContainer.append(newDiv);
                newDiv.appendChild(newContent);
            });
        })
        .catch(error => {
            console.error(error);
        });


//Affichages des films les mieux notés
const urlRating = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`;
fetch(urlRating)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        const secondContainer = document.createElement('div');
        secondContainer.style.display = "flex";
        secondContainer.style.gap = "8px";
        document.body.append(secondContainer);
        let result = data.results;
            result.map(item => {
                // console.log(item.title);
                const secondDiv = document.createElement('div');
                const secondContent = document.createTextNode(item.title);
                const secondImg = document.createElement('img');
                secondImg.src = `https://image.tmdb.org/t/p/w200${item.poster_path}`;
                secondContainer.append(secondImg);
                secondContainer.append(secondDiv);
                secondDiv.appendChild(secondContent);
            });
    })
    .catch(error => {
        console.error(error);
    });

//Affichages des films les mieux notés
const urlComing = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`;
fetch(urlComing)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const thirdContainer = document.createElement('div');
        thirdContainer.style.display = "flex";
        thirdContainer.style.gap = "8px";
        document.body.append(thirdContainer);
        let result = data.results;
            result.map(item => {
                // console.log(item.title);
                const thirdDiv = document.createElement('div');
                const thirdContent = document.createTextNode(item.title);
                const thirdImg = document.createElement('img');
                thirdImg.src = `https://image.tmdb.org/t/p/w200${item.poster_path}`;
                thirdContainer.append(thirdImg);
                thirdContainer.append(thirdDiv);
                thirdDiv.appendChild(thirdContent);
            });
    })
    .catch(error => {
        console.error(error);
    });