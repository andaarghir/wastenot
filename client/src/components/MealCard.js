
import React from "react";


import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/SearchPage.css";

function MealCard({ meal }) {

    const {id, title,description, category, price} = meal;
    let navigate = useNavigate();



  useEffect(() => {
  }, []);

  return (
    <>
    <div className="meal-card">
    <div>{title}</div>
    <div>{description}</div>
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
export default MealCard;
