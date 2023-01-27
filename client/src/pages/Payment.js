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
        <div style={{ backgroundImage: `url(${BannerImage})`, height:"700px" }}>
            <div className="container-auth" style={{marginTop:"70px", marginBottom:"70px"}}>
                <div className="row">
                <h2 className="title-auth"> Payment Page</h2>
                        <div className="card-body">
                            <form>
                                <div className="row-auth">
                                <div className="col-name">
                                        <label className="mb-auth">Card number: </label>
                                    </div>
                                        <div className="col-field">
                                        <input type = "auth"
                                            placeholder = "Enter card number"
                                            name = "card"
                                            className = "form-control"
                                            value = {cardNumber}
                                            onChange = {(event) => setCardNumber(event.target.value)}></input>
                                        </div>
                                        
                                    </div>
                                <div className="row-auth">
                                    <div className="col-name">
                                        <label className="mb-auth">Name: </label>
                                    </div>
                                    <div className="col-field">
                                    <input type = "auth"
                                           placeholder = "Enter your name"
                                           name = "name"
                                           className = "form-control"
                                           value = {name}
                                           onChange = {(event) => setName(event.target.value)}></input>
                                        </div>
                                    </div>
                                <div className="row-auth">
                                    <div className="col-name">
                                        <label className="mb-auth">CVV: </label>
                                    </div>
                                        <div className="col-field">
                                    <input type = "password"
                                           placeholder = "Enter the card's CVV (secure)"
                                           name = "cvv"
                                           className = "form-control"
                                           value = {cvv}
                                           onChange = {(event) => setCvv(event.target.value)}></input>
                                        </div>
                                    </div>
                                <div>
                                <Link to="/accepted" className="btn btn-danger mb-2" style={{ marginTop: "", float:"left"}}>
                                <button  className="btn btn-success text-center">Place order</button>
                                </Link>
                                <button className="btn btn-info text-center" style={{ float:"right" }} onClick={(event) => eraseData(event)}>Erase</button>
                                <Link to="/search" className="btn btn-danger mb-2" style={{ marginTop: "8px", marginLeft:"20px"}}>
                                    <button  className="btn btn-success text-center">Exit</button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



    );

}


export default Payment;