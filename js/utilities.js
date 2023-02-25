function allCountries(country){
    const cardContainer = document.getElementById('card-container');
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
}
