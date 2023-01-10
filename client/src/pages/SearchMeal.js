import React, { useState, useEffect, useRef } from "react";
import { Form, } from "react-bootstrap";
import { useNavigate,  } from "react-router-dom";
import PictureLeft from "../assets/search-meal.jpg";
import Select from 'react-select';
import Axios from "axios";
import "../styles/SearchPage.css";

const categoryOptions = [
  { value: 'soup', label: 'soup' },
  { value: 'main course', label: 'main course' },
  { value: 'fast-food', label: 'fast-food' },
  { value: 'chicken', label: 'chicken' },
  { value: 'pasta', label: 'pasta' },
  { value: 'rice', label: 'rice' },
  { value: 'beef', label: 'beef' },
  { value: 'dessert', label: 'dessert' },
  { value: 'fish', label: 'fish' },
]

const Checkbox = ({ children, ...props }) => (
  <label style={{ marginRight: '1em' }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);

function SearchMeal() {


    //Set parameters for the Forms as empty.
    const [city, setCity] = useState("");
    const [category, setCategory] = useState("");
    const [option, setOption] = useState("all");
    const [price, setPrice] = useState("");
    let navigate = useNavigate();


    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isVegan, setIsVegan] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      navigate(
        `/showmeals/?city=${city}&price=${price}&category=${category}&option=${option}`
      );
    }

    const handleVegan = () => {
      setIsVegan((state) => !state);
      setOption("vegan")
    }

    const handleVegetarian = () => {
      setIsVegetarian((state) => !state);
      setOption("vegetarian");
    }

  return (
    <>
        <div
        className="search">
        <div
        className="leftSide"
        style={{ backgroundImage: `url(${PictureLeft})` }}
      ></div>
      <div className="rightSide">
      <h1>
        Search for a meal in your town!
      </h1>
      <div className="search-bar">
        <Form>
          <div className="inner-form">
            <div className="input-field first-wrap custom-select">
              <Form.Group controlId="city">
                <Form.Control
                  className="city"
                  placeholder={city ? city : "City"}
                  value={city}
                  type="text"
                  onChange={(e) => setCity(e.target.value || "")}
                />
              </Form.Group>
            </div>
            <div className="category-title">
            <small>Category</small>
            </div>
            <div className="category">
            <div className="category-select">
            <select 
            onChange={(e) => setCategory(e.target.value || "")}
            className="form-select">
            <option defaultValue disabled>
              Select category
            </option>
            <option value="salad">salad</option>
            <option value="soup">soup</option>
            <option value="chicken">chicken</option>
            <option value="fast-food">fast-food</option>
            <option value="pasta">pasta</option>
            <option value="fish">fish</option>
            <option value="beef">beef</option>
            <option value="rice">rice</option>
            <option value="dessert">dessert</option>
          </select>
          </div>
          </div>
            <div className="choose-option">
              <Checkbox
                checked={isVegetarian}
                onChange={() => handleVegetarian()}
              >
                vegetarian
              </Checkbox>
              <Checkbox
                checked={isVegan}
                onChange={() => handleVegan()}
              >
                vegan
              </Checkbox>
              </div>
            <div className="input-field second-wrap">
              <Form.Group controlId="guests">
                <Form.Control
                  className="price"
                  type="number"
                  min="1"
                  max="100"
                  placeholder={price ? price : "Max. price"}
                  value={price}
                  onChange={(e) => setPrice(e.target.value || "")}
                />
              </Form.Group>
            </div>
            <div className="input-field forth-wrap">
              <button
                type="submit"
                className="btn btn-secondary search-button"
                onClick={(e) => handleSubmit(e)}
              >
                Search
              </button>
            </div>
          </div>
        </Form>
        </div>
      </div>
      </div>
    </>
  );
}

export default SearchMeal;
