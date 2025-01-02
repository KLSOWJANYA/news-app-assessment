import React from "react";

const newsData = [
  {
    title: "Breaking News 1",
    description: "This is the description for breaking news 1.",
    image: require("../images/news1.jpg"),
  },
  {
    title: "Breaking News 2",
    description: "This is the description for breaking news 2.",
    image: require("../images/news2.jpg"),
  },
  {
    title: "Breaking News 3",
    description: "This is the description for breaking news 3.",
    image: require("../images/news3.jpg"),
  },
];

function News() {
  return (
    <div className="row">
      {newsData.map((news, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card">
            <img src={news.image} className="card-img-top" alt={news.title} />
            <div className="card-body">
              <h5 className="card-title">{news.title}</h5>
              <p className="card-text">{news.description}</p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
