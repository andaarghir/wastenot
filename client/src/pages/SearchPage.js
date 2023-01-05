import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.png";
import img3 from "../assets/gallery3.png";
import img4 from "../assets/gallery4.png";
import "../styles/SearchPage.css";

function SearchPage() {
  return (
    <>
    <div className="image-gallery">
    <div class="row">
      <img src={img1}/>
      <img src={img2}/>
    </div>
    <div class="column">
      <img src={img3}/>
      <img src={img4}/>
      </div>
    </div>
    <div className="image-gallery-captions">
    <div class="row">
    <div class="column">
      <small>Search for a meal</small>
      <small>Share a meal</small>
      <small>Search for an event</small>
      <small>Host an event</small>
    </div>
    </div>
      </div>
    </>
  );
}

export default SearchPage;
