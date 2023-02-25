const loadCountries = (countryIs) =>{
    const URL = `https://restcountries.com/v3.1/region/${countryIs}`
    fetch(URL)
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries =>{
    countries.slice(0, 12).forEach(country => {
        allCountries(country);
    });
}

const africa = () => {
    document.getElementById('card-container').innerHTML = "";
    const continents = 'africa';
    loadCountries(continents);
}





const showAll = () => {
    countries.forEach(country => {
        allCountries(country);
    });
}


loadCountries('americas')


