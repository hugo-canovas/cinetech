const api_key = "96931d241e200538d71c52e3e31a5b0e";
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US`

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.results);
        const newContainer = document.createElement('div');
        newContainer.style.display = "flex";
        newContainer.style.gap = "8px";
        document.body.append(newContainer);
        let result = data.results;
            result.map(item => {
                console.log(item.title);
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