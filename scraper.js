import got from 'got';
import { JSDOM } from "jsdom";


// Récupérer le contenu HTML de la page web à scraper
const response = await got('https://www.boursorama.com/bourse/matieres-premieres/cours/8xBRN/');

// Charger le contenu HTML dans un objet JSDOM pour le manipuler facilement
const dom = new JSDOM(response.body);

// Extraire le contenu d'un élément HTML spécifique
const FuelPrice = dom.window.document.getElementsByClassName('c-instrument c-instrument--last');
const FuelVariation = dom.window.document.getElementsByClassName('c-instrument c-instrument--variation');

// Date
const timestamp = Date.now();

console.log('price : ' + FuelPrice[0].textContent + ' USD |', 'variation : ' + FuelVariation[0].textContent + ' |', 'date : ' + timestamp);

// Stopper le scraping
process.exit();