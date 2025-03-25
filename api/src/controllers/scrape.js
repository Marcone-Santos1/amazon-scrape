import axios from 'axios'
import { JSDOM } from 'jsdom'

export const scrapeAmazon = async (req, res) => {

    const keyword = req.query.keyword

    if (!keyword) {
        return res.status(400).json({ error: 'Keyword is required' });
    }
    
    const url = `https://www.amazon.com.br/s?k=${encodeURIComponent(keyword)}`;

    console.log(url);
    

    try {
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
            }
        });
        const dom = new JSDOM(data);
        const document = dom.window.document;
        const products = [];

        // Query the DOM for product listings
        document.querySelectorAll('.s-main-slot .s-result-item[role="listitem"]').forEach(item => {

            const titleElement = item.querySelector('a h2 span');
            const title = titleElement ? titleElement.textContent : 'No title available';

            const ratingElement = item.querySelector('.a-icon-alt');            

            const rating = ratingElement ? ratingElement.textContent.split(' ')[0] : 'No rating available';

            const reviewsElement = item.querySelector('.a-row.a-size-small .a-size-base');
            const reviews = reviewsElement ? reviewsElement.textContent : 'No reviews available';

            const imageElement = item.querySelector('.s-image');
            const imageUrl = imageElement ? imageElement.src : 'No image available';


            products.push({ title, rating, reviews, imageUrl });
        });

        return res.json(products);

    } catch (error) {
        console.error('Error scraping Amazon:', error);
        return { error: 'Failed to scrape Amazon' };
    }
}