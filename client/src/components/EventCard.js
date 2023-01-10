
import React from "react";


import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/SearchPage.css";

function EventCard({ meal }) {

    const {id, title,description, menu, price, address, city} = meal;
    let navigate = useNavigate();



  useEffect(() => {
  }, []);

  return (
    <>
    <div className="meal-card">
    <div>{title}</div>
    <div>{address}, {city}</div>
    <div>{description}</div>
    <div>Menu: {menu}</div>
    <div>{price} euros</div>
    <button
        type="submit"
        className="btn btn-secondary search-button"
        >
        Choose
        </button>
    </div>
    </>
  );
}
export default EventCard;
