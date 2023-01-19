import React, { useState, useEffect, useRef } from "react";
import { Form, } from "react-bootstrap";
import { useNavigate, } from "react-router-dom";
import PictureLeft from "../assets/search-meal.jpg";

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import "react-datepicker/dist/react-datepicker.css";
import "../styles/SearchPage.css";

import { addNewMeal } from "../API_Meal";


const Checkbox = ({ children, ...props }) => (
  <label style={{ marginRight: '1em' }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);

function ShareMeal() {
  //
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [allergens, setAllergens] = useState("");
  const [option, setOption] = useState("all");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState("https://images.immediate.co.uk/production/volatile/sites/30/2017/10/mealprep-4d4132d.jpg");
  
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addNewMeal(title, 1, description, category, allergens, option, price, city, image);
    // navigate('/search')
    console.log(category);

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
        className="search-event">
        <div
          className="rightSide"
          style={{ backgroundImage: `url(${PictureLeft})` }}
        ></div>
        <div className="leftSide">
          <h1>
            Share a meal!
          </h1>
          <div className="search-bar">
            <Form>
              <div className="inner-form">
                <div className="input-field first-wrap custom-select">
                  <Form.Group controlId="title">
                    <Form.Control
                      className="title"
                      placeholder={title ? title : "Title"}
                      value={title}
                      type="text"
                      onChange={(e) => setTitle(e.target.value || "")}
                    />
                  </Form.Group>
                </div>

                <div className="input-field first-wrap custom-select">
                  <Form.Group controlId="description">
                    <Form.Control
                      className="description"
                      placeholder={description ? description : "Description"}
                      value={description}
                      type="text"
                      onChange={(e) => setDescription(e.target.value || "")}
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

                <div className="input-field first-wrap custom-select">
                  <Form.Group controlId="allergens">
                    <Form.Control
                      className="city"
                      placeholder={allergens ? allergens : "Enter allergens"}
                      value={allergens}
                      type="text"
                      onChange={(e) => setAllergens(e.target.value || "")}
                    />
                  </Form.Group>
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
                      placeholder={price ? price : "Enter meal price"}
                      value={price}
                      onChange={(e) => setPrice(e.target.value || "")}
                    />
                  </Form.Group>
                </div>

                <div className="input-field first-wrap custom-select">
                  <Form.Group controlId="city">
                    <Form.Control
                      className="city"
                      placeholder={city ? city : "Enter city where the meal in available"}
                      value={city}
                      type="text"
                      onChange={(e) => setCity(e.target.value || "")}
                    />
                  </Form.Group>
                </div>

                <div className="input-field forth-wrap">
                  <button
                    type="submit"
                    className="btn btn-secondary search-button"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Add meal
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

export default ShareMeal;