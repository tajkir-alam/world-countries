let searchTxt = 'americas';
const loadCountries = (countryIs) =>{
    searchTxt = countryIs;
    const URL = `https://restcountries.com/v3.1/region/${countryIs}`
    document.getElementById('spinner').classList.remove('d-none');
    fetch(URL)
    .then(res => res.json())
    .then(data => {
    document.getElementById('spinner').classList.add('d-none');
        displayCountries(data)});
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
    countries.slice(15, countries.length).forEach(country => {
            allCountries(country);
    });
}

const africa = () => {
    loadCountries('africa');
    document.getElementById('card-container').innerHTML = "";
}
const america = () => {
    loadCountries('americas');
    document.getElementById('card-container').innerHTML = "";
}
const asia = () => {
    loadCountries('asia');
    document.getElementById('card-container').innerHTML = "";
}
const europe = () => {
    loadCountries('europe');
    document.getElementById('card-container').innerHTML = "";
}
const oceania = () => {
    loadCountries('oceania');
    document.getElementById('card-container').innerHTML = "";
}

const searchBtn = () => {
    const searchField = document.getElementById('search-field').value;
    document.getElementById('card-container').innerHTML = "";
    loadCountries(searchField);
}


loadCountries(searchTxt)


