let searchTxt = 'americas';
const loadCountries = (countryIs) =>{
    const URL = `https://restcountries.com/v3.1/region/${countryIs}`
    fetch(URL)
    .then(res => res.json())
    .then(data => displayCountries(data));
}
const displayCountries = countries =>{
    countries.slice(0, 15).forEach(country => {
        allCountries(country);
    });
}

const showAllBtn = () => {
    const URL = `https://restcountries.com/v3.1/region/${searchTxt}`
    fetch(URL)
    .then(res => res.json())
    .then(data => showAll(data));
}
const showAll = (countries) => {
    countries.forEach(country => {
            allCountries(country);
    });
}

const africa = () => {
    document.getElementById('card-container').innerHTML = "";
    loadCountries('africa');
}
const america = () => {
    document.getElementById('card-container').innerHTML = "";
    loadCountries('americas');
}
const asia = () => {
    document.getElementById('card-container').innerHTML = "";
    loadCountries('asia');
}
const europe = () => {
    document.getElementById('card-container').innerHTML = "";
    loadCountries('europe');
}
const oceania = () => {
    document.getElementById('card-container').innerHTML = "";
    loadCountries('oceania');
}

const searchBtn = () => {
    const searchField = document.getElementById('search-field').value;
    document.getElementById('card-container').innerHTML = "";
    loadCountries(searchField);
}


loadCountries(searchTxt)


