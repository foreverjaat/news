import { useEffect, useState } from "react";
import NewsItem from "./NewsItem.jsx";

const NewsBoard = ({ category }
) => {

    const [artical, setArtical] = useState([]);

    useEffect(() => {

      let url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&apikey=${import.meta.env.VITE_API_KEY_MY}`
     
   fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.articles) {
            setArtical(data.articles);
        }
      });
        
}, [category]);

return (
    <div>
        <h2 className="text-center">
            Latest <span className="badge bg-danger">News</span>
        </h2>

        {artical.map((news, index) => {
            return (
                <NewsItem
                    key={index}
                    title={news.title}
                    description={news.description}
                    src={news.image}
                    url={news.url}
                />
            );
        })}
    </div>
);
};

export default NewsBoard;
