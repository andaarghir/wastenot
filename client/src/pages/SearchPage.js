import React from "react";

import { Link } from "react-router-dom";
import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.png";
import img3 from "../assets/gallery3.png";
import img4 from "../assets/gallery4.png";
import "../styles/SearchPage.css";

function SearchPage() {
  return (
    <>
      <div className="image-gallery">
        <div className="row">
          <Link to="/meals">
            <img src={img1} />
          </Link>
          <img src={img2} />
        </div>
        <div className="column">
          <Link to="/events">
            <img src={img3} />
          </Link>
          <img src={img4} />
        </div>
      </div>
      <div className="image-gallery-captions">
        <div className="row-captions">
          <div className="column">
            <Link to="/meals">
              <small>Search for a meal</small>
            </Link>
            <Link to="/shareMeal">
                <small>Share a meal</small>
            </Link>
            <Link to="/events">
                <small>Search for an event</small>
            </Link>
            <Link to="/hostevent">
              <small>Host an event</small>
            </Link>
          </div>
        </div>
        <div className="search-paragraph">
          <p>Enjoy a lovely and warm homemade meal, and discover a new cusine, or attend an eating event and meet new people! Your choice!</p>
        </div>
      </div>
    </>
  );
}

export default SearchPage;
