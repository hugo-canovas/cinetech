const api_key = "96931d241e200538d71c52e3e31a5b0e";

// création d'une card pour l'affichage des films
function createCard(type, classNames, attributes, content){
    const card = document.createElement(type);

    // ajout du nom des classes
    if(classNames){
        card.classList.add(...classNames);
    }

    if(attributes){
        for(const [key, value] of Object.entries(attributes)){
            card.setAttribute(key, value);
        }
    }

    if(content){
        if(typeof content === 'string'){
            card.textContent = content;
        }else{
            card.appendChild(content);
        }
    }

    return card;
}

// Affichage des films dernièrement sorti
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US`;
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let totalPages = data.total_pages;
        for(i = 1; i <= `${totalPages}`; i++){
            fetch(url+"&page="+i)
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

                            document.getElementById('nowPlaying').appendChild(newCard);
                            newCard.appendChild(newImg);
                            newCard.appendChild(newTitle);                        
                    });
            })
        } 
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
                // secondContainer.append(secondImg);
                // secondContainer.append(secondDiv);
                // secondDiv.appendChild(secondContent);
            });
    })
    .catch(error => {
        console.error(error);
    });


//Affichages des films à venir
const urlComing = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`;
fetch(urlComing)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
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
                // thirdContainer.append(thirdImg);
                // thirdContainer.append(thirdDiv);
                // thirdDiv.appendChild(thirdContent);
            });
    })
    .catch(error => {
        console.error(error);
    });