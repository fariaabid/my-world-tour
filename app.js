fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data => displayCountries(data));


const displayCountries = countries => {
    const countriesDiv = document.getElementById("countries");
    countries.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.className = "country";
        const countryInfo = `
            <h3 class = "country-name">${country.name}</h3>
            <p>${country.capital}</p>
            <button onClick="displayCountryDetail('${country.name}')">Details</button>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement("div");
    //     countryDiv.className = "country";

    //     // const h3 = document.createElement("h3");
    //     // h3.innerText = country.name;
    //     // countryDiv.appendChild(h3);

    //     // const p = document.createElement("p");
    //     // p.innerText = country.capital;
    //     // countryDiv.appendChild(p);

    //     const countryInfo = `
    //         <h3 class = "country-name">${country.name}</h3>
    //         <p>${country.capital}</p>
    //     `
    //     countryDiv.innerHTML = countryInfo;
    //     countriesDiv.appendChild(countryDiv);
    // }


}

const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(response => response.json())
        .then(data => renderCountryInformation(data[0]));
}

const renderCountryInformation = country => {
    console.log(country);
    const countryDiv = document.getElementById("countryDetail");
    countryDiv.innerHTML = `
          <h1>Country Name: ${country.name}</h1>
          <p>Country Alpha Code: ${country.alpha3Code}</p>
          <p>Area: ${country.area}</p>
          <p>Capital: ${country.capital}</p>
          <img src="${country.flag}">
          <p>Population: ${country.population}</p>
          <p>Region: ${country.region}</p>
          <p>Timezone: ${country.timezones}</p>
          
    `
}