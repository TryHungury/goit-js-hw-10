import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCounties } from './fetchCountries';
export { markupOneCountry, markupMoreCountry }

const DEBOUNCE_DELAY = 300;

const refs = {
    searchRef: document.querySelector("#search-box"),
    countryList: document.querySelector(".country-list"),
    countryInfo: document.querySelector(".country-info")
}

// console.log(refs.searchRef)
// console.log(refs.countryList)
// console.log(refs.countryInfo)

refs.searchRef.addEventListener('input', debounce((e)=>{
    refs.countryInfo.innerHTML ="";
    refs.countryList.innerHTML ="";
    fetchCounties((e.target.value).trim())
}, DEBOUNCE_DELAY))

function markupOneCountry(obj) {
    let markup = `
    <h1 class="country-name">
    <img class="county-flag" src="${obj.flags.svg}" alt="${obj.name}" width="35">
    ${obj.name}
    </h1>
    <p class="country-header">Capital: <span class="country-span">${obj.capital}</span>
    </p>
    <p class="country-header">Population: <span class="country-span">${obj.population}</span>
    </p>
    <p class="country-header">Languages: <span class="country-span">${obj.languages.map((lang)=>{
        return ` ${lang.name}`}
    )} </span> 
    </p>`
    // console.log(obj)
    refs.countryInfo.insertAdjacentHTML("beforeend", markup) 
}

function markupMoreCountry(arr) {
    console.log(arr)
    let markup = [];
    arr.map((country)=>{
        markup.push(`
        <li class="country-list"><img class="county-flag" src="${country.flags.svg}" alt="${country.name}" width="35">
        ${country.name}
        </img></li>
        `)
    })

    refs.countryList.insertAdjacentHTML("beforeend", markup.join(""))   
}

