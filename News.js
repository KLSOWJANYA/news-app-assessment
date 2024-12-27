import React, { useState, useEffect } from "react";
import axios from "axios";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.sampleapis.com/news") // Replace with your API URL
      .then((response) => setNews(response.data))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {news.map((article, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <img
                src={article.image || "https://via.placeholder.com/150"}
                className="card-img-top"
                alt={article.title}
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
