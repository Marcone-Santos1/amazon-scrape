const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export function setUpScrape() {
  const scrapeBtn = document.getElementById('scrapeBtn');
  const keywordInput = document.getElementById('keyword');
  const resultsDiv = document.getElementById('results');

  scrapeBtn.addEventListener('click', async () => {
      const keyword = keywordInput.value.trim();
      
      if (!keyword) {
          resultsDiv.innerHTML = '<p>Please enter a keyword.</p>';
          return;
      }

      resultsDiv.innerHTML = '<p>Loading...</p>';

      try {
          const response = await fetch(`${apiUrl}/api/scrape?keyword=${encodeURIComponent(keyword)}`);
          const products = await response.json();

          // Limpa apenas os resultados, mantendo o resto da página
          resultsDiv.innerHTML = '';
          
          products.forEach(product => {
              const productDiv = document.createElement('div');
              productDiv.classList.add('product');
              productDiv.innerHTML = `
                  <img src="${product.imageUrl}" alt="Product Image">
                  <h2>${product.title}</h2>
                  <p><strong>Rating:</strong> ${product.rating}</p>
                  <p><strong>Reviews:</strong> ${product.reviews}</p>
              `;
              resultsDiv.appendChild(productDiv);
          });
      } catch (error) {
          resultsDiv.innerHTML = '<p>Error fetching products.</p>';
          console.error('Error:', error);
      }
  });
}