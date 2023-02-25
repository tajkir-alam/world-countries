const loadCountries = (countryIs) =>{
    const URL = `https://restcountries.com/v3.1/region/${countryIs}`
    fetch(URL)
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries =>{
    const cardContainer = document.getElementById('card-container');
    countries.slice(0, 50).forEach(country => {
        console.log(country);
        const {name:{common}, flags:{png}} = country;
        const cardContent = document.createElement('div');
        cardContent.classList.add('col');
        cardContent.innerHTML = `
            <div class="card h-100">
                <img src="${png}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${common}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `
        cardContainer.appendChild(cardContent);
    });
}

// const dropdownContinents = continents => {
//     document.getElementById
// }

loadCountries('asia')