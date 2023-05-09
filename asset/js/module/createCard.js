// création d'une card pour l'affichage des films
export function createCard(type, classNames, attributes, content){
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