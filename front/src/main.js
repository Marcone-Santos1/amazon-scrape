import './style.css';
import { setUpScrape } from './scrape.js';

// Estrutura fixa que não será substituída
document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Amazon Product Scraper</h1>
    <input type="text" id="keyword" placeholder="Enter product keyword">
    <button id="scrapeBtn">Scrape Amazon</button>
    <div id="results" class="products"></div>
  </div>
`;

setUpScrape();