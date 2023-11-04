import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/NewsList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faLanguage } from "@fortawesome/free-solid-svg-icons";

function NewsList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [showFirstData, setShowFirstData] = useState(true);
  const [clickedIndex, setClickedIndex] = useState(-1);

  useEffect(() => {
    fetch("http://localhost:5001/api/data")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5001/api/data1")
      .then((response) => response.json())
      .then((datas) => {
        setDatas(datas);
        setLoading(false); // Corrected
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleData = () => {
    setShowFirstData((prevShowFirstData) => !prevShowFirstData);
  };

  const handleCardClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <div className="container mt-4 news-list-container">
      <h1 className="cool-title mb-4">Explore News</h1>
      <button
        onClick={toggleData}
        className="btn btn-primary mb-3 rounded-circle translation-button"
      >
        <FontAwesomeIcon icon={faLanguage} className="translation-icon" />
      </button>
      <div className="row">
        {showFirstData
          ? data.map((newsItem, index) => (
              <div key={newsItem.id} className="col-lg-4 mb-4">
                <div
                  className={`article-card ${
                    clickedIndex === index ? "clicked" : ""
                  }`}
                  onClick={() => handleCardClick(index)}
                >
                  {newsItem.urlToImage ? (
                    <img
                      src={newsItem.urlToImage}
                      className="card-img-top"
                      alt="News Image"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faImage}
                      className="card-img-top no-image-icon"
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link
                        to={`/news/${newsItem.id}&english`}
                        state={newsItem}
                        className="card-link"
                      >
                        {newsItem.title}
                      </Link>
                    </h5>
                    <p className="card-description">
                      {newsItem.content.substring(0, 100)}...
                    </p>
                    <p className="card-author">Author: {newsItem.author}</p>
                  </div>
                </div>
              </div>
            ))
          : datas.map((news, index) => (
              <div key={news.id} className="col-lg-4 mb-4">
                <div
                  className={`article-card ${
                    clickedIndex === index ? "clicked" : ""
                  }`}
                  onClick={() => handleCardClick(index)}
                >
                  {news.urlToImage ? (
                    <img
                      src={news.urlToImage}
                      className="card-img-top"
                      alt="News Image"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faImage}
                      className="card-img-top no-image-icon"
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link
                        to={`/news/${news.id}&japanese`}
                        state={news}
                        className="card-link"
                      >
                        {news.title}
                      </Link>
                    </h5>
                    <p className="card-description">
                      {news.content.substring(0, 100)}...
                    </p>
                    <p className="card-author">Author: {news.author}</p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default NewsList;
