import React, { useState, useEffect, useRef } from "react";
import { Form, } from "react-bootstrap";
import { useNavigate, } from "react-router-dom";
import PictureLeft from "../assets/search-event.jpg";
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import "react-datepicker/dist/react-datepicker.css";
import "../styles/SearchPage.css";

import { Event } from "../event";
import { addNewEvent } from "../API";


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



function HostEvent() {
  //
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [option, setOption] = useState("");
  const [menu, setMenu] = useState("");
  const [price, setPrice] = useState("");
  let navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());

  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addNewEvent(title, 1, 1, description, price, 7, address, city, "2023-01-10", menu);
    navigate('/search')

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
            Host an event for people to eat!
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


                <div className="input-field first-wrap custom-select">
                  <Form.Group controlId="city">
                    <Form.Control
                      className="city"
                      placeholder={city ? city : "Enter City"}
                      value={city}
                      type="text"
                      onChange={(e) => setCity(e.target.value || "")}
                    />
                  </Form.Group>
                </div>


                <div className="input-field first-wrap custom-select">
                  <Form.Group controlId="address">
                    <Form.Control
                      className="address"
                      placeholder={address ? address : "Enter Address"}
                      value={address}
                      type="text"
                      onChange={(e) => setAddress(e.target.value || "")}
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


                <div className="input-field first-wrap custom-select">
                  <Form.Group controlId="menu">
                    <Form.Control
                      className="menu"
                      placeholder={menu ? menu : "What will you serve the guests?"}
                      value={menu}
                      type="text"
                      onChange={(e) => setMenu(e.target.value || "")}
                    />
                  </Form.Group>
                </div>



                <div className="input-field second-wrap">
                  <Form.Group controlId="guests">
                    <Form.Control
                      className="price"
                      type="number"
                      min="1"
                      max="100"
                      placeholder={price ? price : "Enter event price"}
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
                    Add event
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

export default HostEvent;