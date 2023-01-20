import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
//import UserService from "../services/UserService";
import { Button, Col, Modal, Navbar, Row } from 'react-bootstrap';
import {Link} from "react-router-dom";
import "../styles/Auth.css";
import BannerImage from "../assets/auth.jpg";
import "../styles/Footer.css";


function PaymentAccepted() {

    return <>
        <Row>
            <Col>
                <h1>Payment accepted!</h1>
                <Link to="/search"><Button>Go back to search</Button></Link>
            </Col>
        </Row>
    </>
}

export default PaymentAccepted;