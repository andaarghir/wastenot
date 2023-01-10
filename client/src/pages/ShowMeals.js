import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";

import { Container, Row } from "react-bootstrap";
import MealCard from "../components/MealCard";
import { useSearchParams } from "react-router-dom";
import "../styles/SearchPage.css";

const fetchData = (
  setMeals,
  meals,
  city,
  option,
  price,
  category,
  setLoading
) => {
  let link = `http://localhost:3001/api/v1/meals/${category}/${price}/${city}/${option}`;
  console.log(link);
  //POST call to retrieve the meals with the given parameters.
  Axios.get(link).then((res) => {
    console.log(res.data);
    setMeals(res.data);
    setLoading(false);
  });
};

function ShowMeals() {
  const [meals, setMeals] = useState([]);
  //Get the search paramteres from the URL.
  const [searchParams, setSearchParamas] = useSearchParams();
  const [city, setCity] = useState(searchParams.get("city"));
  const [price, setPrice] = useState(searchParams.get("price"));
  const [category, setCategory] = useState(searchParams.get("category"));
  const [option, setOption] = useState(searchParams.get("option"));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(setMeals, meals, city, option, price, category, setLoading);
  }, []);
  return (
    <>
      {!loading && (
        <Container>
          <Row>
            {meals.map((meal, index) => (
              <MealCard key={index} meal={meal} />
            ))}
          </Row>
          {!meals.length && (
            <div className="message-nomeals">
              <h5>No exact matches</h5>
              <div>
                Try changing or removing some of your filters or adjusting your
                search.
              </div>
            </div>
          )}
        </Container>
      )}
    </>
  );
}

export default ShowMeals;
