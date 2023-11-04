import React from "react";
import politicsImage from "./politics.jpg";
import technologyImage from "./technology.jpg";
import businessImage from "./business.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faSearch,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="container-fluid p-0">
      <section className="hero bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 mb-4">Welcome to BestNews</h1>
          <p className="lead mb-4">
            Stay Informed, Stay Ahead, and Be Inspired with the latest news from
            around the United States.
          </p>
          <p className="lead">
            At BestNews, we're dedicated to delivering the most current and
            sought-after news, carefully curated just for you. Whether you're
            interested in politics, technology, business, or more, we have you
            covered.
          </p>
          <a href="/news" className="btn btn-light btn-lg mt-4">
            Explore News
          </a>
        </div>
      </section>

      <section className="features bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="feature-box p-4 text-center bg-white shadow box-height">
                <FontAwesomeIcon
                  icon={faNewspaper}
                  size="3x"
                  className="text-primary mb-3"
                />
                <h3>Latest News</h3>
                <p>
                  Discover up-to-the-minute news from around the United States
                  and around the world. Our team of dedicated journalists
                  ensures you're always in the know.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="feature-box p-4 text-center bg-white shadow box-height">
                <FontAwesomeIcon
                  icon={faSearch}
                  size="3x"
                  className="text-primary mb-3"
                />
                <h3>Find Anything</h3>
                <p>
                  Looking for a specific topic or story? Our powerful search
                  engine helps you find articles for your next big story with
                  ease.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-box p-4 text-center bg-white shadow box-height">
                <FontAwesomeIcon
                  icon={faLanguage}
                  size="3x"
                  className="text-primary mb-3"
                />
                <h3>Available in Multiple Languages</h3>
                <p>
                  Experience our content in multiple languages, including
                  Japanese. Breaking down language barriers, we're here to serve
                  diverse communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news-categories bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4 explore-categories">HOT TOPICS</h2>

          <div className="row">
            <div className="col-lg-4">
              <div className="category-card p-4 mb-4 text-center">
                <h3 className="text-primary">Politics</h3>
                <p>
                  Stay informed about the latest political developments, from
                  elections to policy changes. Dive into the heart of
                  governmental news.
                </p>
                <img
                  src={politicsImage}
                  alt="Politics"
                  className="category-image"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="category-card p-4 mb-4 text-center">
                <h3 className="text-danger">Technology</h3>
                <p>
                  Discover the cutting-edge tech news and innovations that are
                  shaping the future. Get insights into the digital world's
                  latest trends.
                </p>
                <img
                  src={technologyImage}
                  alt="Technology"
                  className="category-image"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="category-card p-4 text-center">
                <h3 className="text-success">Business</h3>
                <p>
                  Get insights into the world of business and finance. Stay
                  updated on stock markets, corporate news, and economic trends.
                </p>
                <img
                  src={businessImage}
                  alt="Business"
                  className="category-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta text-white text-center py-5 bg-primary">
        <div className="container">
          <h2 className="display-4 mb-4">The Ultimate News Finder App</h2>
          <p className="lead">
            Your source for trusted news, delivered with accuracy and speed.
            Start exploring now and unlock a world of information at your
            fingertips.
          </p>
          <a href="/news" className="btn btn-light btn-lg">
            Explore News
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
