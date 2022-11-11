import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCounties , oneCountryObject, moreCountryObject} from './fetchCountries';

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
    fetchCounties((e.target.value).trim())
    console.log(oneCountryObject)
}, DEBOUNCE_DELAY))

