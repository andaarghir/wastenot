import React from "react";

import { Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/SearchPage.css";

function MealCard({ meal }) {
  const { id, title, description, category, price, img } = meal;
  let navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <>
      <Col lg="4">
        <div className="meal-card">
          <img src={img} />
          <div>{title}</div>
          <div>{description}</div>
          <div>{price} euros</div>
          <button type="submit" className="btn btn-secondary search-button">
            Choose
          </button>
        </div>
      </Col>
    </>
  );
}
export default MealCard;
