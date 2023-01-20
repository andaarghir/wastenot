import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
//import UserService from "../services/UserService";
import { Button, Modal, Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom";
import "../styles/Auth.css";
import BannerImage from "../assets/auth.jpg";
import "../styles/Footer.css";




function Payment() {


    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCvv] = useState("");
    const [name, setName] = useState("");


    const eraseData = (event) => {
        event.preventDefault();
        setCardNumber("");
        setCvv("");
        setName("");
    }

    return (
        <div>
            <div className="header">
                
            </div>
            <div className="container" style={{marginTop:"10px"}}>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        Payment page
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Card number: </label>
                                    <input type = "text"
                                           placeholder = "Enter card number"
                                           name = "card"
                                           className = "form-control"
                                           value = {cardNumber}
                                           onChange = {(event) => setCardNumber(event.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Name: </label>
                                    <input type = "text"
                                           placeholder = "Enter your name"
                                           name = "name"
                                           className = "form-control"
                                           value = {name}
                                           onChange = {(event) => setName(event.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">CVV: </label>
                                    <input type = "text"
                                           placeholder = "Enter the card's CVV (secure)"
                                           name = "cvv"
                                           className = "form-control"
                                           value = {cvv}
                                           onChange = {(event) => setCvv(event.target.value)}></input>
                                </div>
                                
                                <Link to="/accepted" className="btn btn-danger mb-2" style={{ marginTop: "8px", marginLeft: "400px" }}>
                                <button  className="btn btn-success text-center">Place order</button>
                                </Link>
                                
                                <button className="btn btn-info text-center" style={{ marginLeft: "10px" }} onClick={(event) => eraseData(event)}>Erase</button>
                                <Link to="/search" className="btn btn-danger mb-2" style={{ marginTop: "8px", marginLeft: "400px" }}>Exit</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );

}


export default Payment;