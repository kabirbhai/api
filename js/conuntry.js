const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
loadCountry()
const displayCountry = countrys => {
    const mainDiv = document.getElementById('container');
    countrys.forEach(country => {
        // const div = document.createElement('div')
        // div.classList.add('body')
        // const button = document.createElement('button')
        // const h2 = document.createElement('h2')
        // const p = document.createElement('p')
        // h2.innerText = country.name.common;
        // p.innerText = country.capital;
        // button.innerText = 'click me '
        // div.appendChild(h2)
        // div.appendChild(p)
        // div.appendChild(button)
        // mainDiv.appendChild(div)

        // console.log(country.capital)

        const div = document.createElement('div')
        div.innerHTML = `
        <h2>${country.name.common}</h2>
        <p>captal of countryes: ${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">detile</button>
        `;
        div.classList.add('body')
        mainDiv.appendChild(div)
    });

}
const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetiles(data[0]))
}

const displayCountryDetiles = country => {
    console.log(country)
    const countryDtl = document.getElementById('country-dtl')
    countryDtl.innerHTML = `
    <h4>${country.name.common}</h4>
    <p>${country.population}</p>
    <img width"100px" src="${country.flags.svg}">
    
    `;
}