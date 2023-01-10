import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";

import { Container, Row } from "react-bootstrap";
import EventCard from "../components/EventCard";
import { useSearchParams } from "react-router-dom";
import "../styles/SearchPage.css";

const fetchData = (
  setEvents,
    events,
    city,
   // option,
    price,
    date,
    setLoading
  ) => {
    let link = `http://localhost:3001/api/v1/events/2023-01-10/${price}/${city}`;
    console.log(link)
   //POST call to retrieve the meals with the given parameters.
    Axios.get(link).then((res) => {
        console.log(res.data)
        setEvents(res.data);
      setLoading(false);
    });
  };

function ShowEvents() {

const [events, setEvents] = useState([]);
  //Get the search paramteres from the URL.
  const [searchParams, setSearchParamas] = useSearchParams();
 const [city, setCity] = useState(searchParams.get("city"));
 const [price, setPrice] = useState(searchParams.get("price"));
 const [date, setDate] = useState(searchParams.get("date"));
 //const [option, setOption] = useState(searchParams.get("option"));
 
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      fetchData(
    setEvents,
    events,
    city,
   // option,
    price,
    date,
    setLoading
      );
    },
    []
  );
  return (
    <>
      {!loading &&
      <Container>
        <Row>
          {events.map((meal, index) => (
            <EventCard key={index} meal={meal} />
            ))}
        </Row>
        {!events.length && 
        <div className="message-nomeals">
        <h5>No exact matches</h5>
        <div>Try changing or removing some of your filters or adjusting your search.</div>
        </div>
        }
      </Container>
      }
    </>
  );
}

export default ShowEvents;
