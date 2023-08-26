document.addEventListener('DOMContentLoaded', function () {
    const newsContainer = document.getElementById('newsContainer');
    const newsList = document.getElementById('newsList');
  
    async function fetchLatestNews() {
      const apiKey = '48f35e092f654275bf8a31ccbf2b6f73'; // Replace with your NewsAPI key
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${48f35e092f654275bf8a31ccbf2b6f73}`;
  
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
  
        const articles = data.articles;
  
        articles.forEach(article => {
          const listItem = document.createElement('li');
          const link = document.createElement('a');
          link.href = article.url;
          link.textContent = article.title;
          listItem.appendChild(link);
          newsList.appendChild(listItem);
        });
  
        newsContainer.style.display = 'block';
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    fetchLatestNews();
  });