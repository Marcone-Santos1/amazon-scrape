const scrapeBtn = document.getElementById('scrapeBtn');
scrapeBtn.addEventListener('click', async () => {
    const keyword = document.getElementById('keyword').value;
    if (!keyword) {
        alert('Please enter a keyword');
        return;
    }

    try {
        const response = await fetch(`/api/scrape?keyword=${encodeURIComponent(keyword)}`);
        const products = await response.json();

        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h2>${product.title}</h2>
                <p>Rating: ${product.rating}</p>
                <p>Reviews: ${product.reviews}</p>
                <img src="${product.imageUrl}" alt="Product Image">
            `;
            resultsDiv.appendChild(productDiv);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
});