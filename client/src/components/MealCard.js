import React from "react";

import { Col } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "../styles/SearchPage.css";
import Button from 'react-bootstrap/Button';

function MealCard({ meal }) {
  const { id, title, description, category, price, img } = meal;
  let navigate = useNavigate();


  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {}, []);

  return (
    <>
      <Col lg="4">
        <div className="meal-card">
          <img src={img} />
          <div>{title}</div>
          <div>{description}</div>
          <div>{price} euros</div>
          <Link to="/payment" >
            <button type="submit" className="btn btn-secondary search-button">
            Choose
          </button></Link>

        </div>
      </Col>
    </>
  );
}



function Example() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}




export default MealCard;
