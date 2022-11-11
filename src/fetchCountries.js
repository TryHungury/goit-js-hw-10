import Notiflix from 'notiflix';

const oneCountryObject = {};

const moreCountryObject = [];

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

                markupForOneCounty(r[0])
            } else {

                markupForMoreCounty(r)     
            }
        }).catch(error =>{
            if (error) { 

                notificationFailure();
            }
        })
}   

function markupForOneCounty(obj) {
    oneCountryObject.name = obj.name;
    oneCountryObject.capital = obj.capital;
    oneCountryObject.population = obj.population;
    oneCountryObject.languages = [];
    obj.languages.map((lang)=>{
        oneCountryObject.languages.push(lang.name)
    });
    oneCountryObject.flags = obj.flags.svg;    
    // console.log(oneCountryObject)   
}

function markupForMoreCounty(arr) {
    console.log(arr)   
}

function notificationInfo() {
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
}

function notificationFailure() {
    Notiflix.Notify.failure('Oops, there is no country with that name')
}

export { fetchCounties , oneCountryObject, moreCountryObject }