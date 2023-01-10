import React, { useState, useEffect, useRef } from "react";
import { Form, } from "react-bootstrap";
import { useNavigate,  } from "react-router-dom";
import PictureLeft from "../assets/search-event.jpg";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import "react-datepicker/dist/react-datepicker.css";
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

function SearchEvent() {


    //Set parameters for the Forms as empty.
    const [city, setCity] = useState("");
    const [option, setOption] = useState("");
    const [price, setPrice] = useState("");
    let navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());

    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isVegan, setIsVegan] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      navigate(
        `/showevents/?date=${startDate}&price=${price}&city=${city}`
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
        className="search-event">
        <div
        className="rightSide"
        style={{ backgroundImage: `url(${PictureLeft})` }}
      ></div>
      <div className="leftSide">
      <h1>
        Search for a fun event in your town!
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
            <small>Date</small>
            </div>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
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

export default SearchEvent;
