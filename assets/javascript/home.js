// photographers array
let photographersList = [];
let filteredList = [];

const photographContainer = document.querySelector('.homepage__content')

window.addEventListener("hashchange", filterPhotographs)

// detect if there is a hash
//window.addEventListenener("hashchange", filtering)

function getAllPhotographs() {
    try {
        fetch("./data.json") // check here why not showing
        .then(res => res.json())
        .then(data => data.photographers)
        .then( (photographersJson) => {
            photographersList = photographersJson
        })
        .then(() => {filterPhotographs() } ) // filter the results then print them
        .then(() => { console.log(filteredList) });
    } catch (e) {
        console.log(e)
    }
}

function filterPhotographs () {
    if (window.location.hash == "" ) {
        filteredList = photographersList;
        listPhotographs();
    } else {
        let filter = window.location.hash
        filteredList = photographersList.filter( (photograph) => {
            //check photograph tag
            for (let tag of photograph.tags) {
                //check tag match filter
                if(tag == filter.substring(1)){
                    
                    return true;
                }
            }
            return false;        
        });
        listPhotographs();
    }
}

// delete old ones
function listPhotographs() {
    photographContainer.innerHTML = "";
    filteredList.forEach(function (photograph) {
        let photographTagRender ="";
        for(let tag of photograph.tags) {
            photographTagRender +=`<a class="filter" href="#${tag}" aria-label="filtre ${tag}">#${tag}</a>`;
        }      
        photographContainer.insertAdjacentHTML("beforeend",`
            <div class="card">
            <a href="profile.html?id=${photograph.id}" class="card__link" alt="${photograph.name}">
                <img class="card__image" width="10" src="./assets/images/Photographers ID Photos/${photograph.portrait}"/>
                <h2 class="card__title">${photograph.name}</h2>
            </a>            
            <p class="card__location">${photograph.city}, ${photograph.country}</p>
            <p class="card__bio"${photograph.tagline}</p>
            <p class="card__price">${photograph.price}€/jour</p>
            <div class="card__tags" alt="Tag">${photographTagRender}</div>
            </div>
        `);
      });
}

getAllPhotographs();