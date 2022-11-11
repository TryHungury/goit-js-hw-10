export { fetchCounties }
import Notiflix from 'notiflix';
import { markupMoreCountry, markupOneCountry } from './index.js';

function fetchCounties (name) {
    fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,languages,population,flags`).then(r => {
        if (r.ok) {
            return r.json()    
        }
        throw new Error("404");

        }).then(r => {
            if (r.length > 9) {

                notificationInfo();
            } else if (r.length < 2) {  

                markupOneCountry(r[0])
            } else {

                markupMoreCountry(r)
            }
        }).catch(error =>{
            if (error) { 

                notificationFailure();
            }
        })
}   

function notificationInfo() {
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
}

function notificationFailure() {
    Notiflix.Notify.failure('Oops, there is no country with that name')
}
