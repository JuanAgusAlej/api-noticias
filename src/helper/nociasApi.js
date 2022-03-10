export const noticiasApi = async (country, category) => {
   
        const resp = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=b85fb98ab9954284a28a5f583cf1da04`)
        const { articles } = await resp.json();
        return articles;
        
   

}

  