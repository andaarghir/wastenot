import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
//import UserService from "../services/UserService";
import { Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom";
import "../styles/Auth.css";
import BannerImage from "../assets/auth.jpg";
import "../styles/Footer.css";








const LogIn = () => {
    const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // let [user, setUser] = useState([]);
    const navigate =  useNavigate();
    const [invalid, setInvalid] = useState(false);


    // const checkCredentials = (event) => {
    //     event.preventDefault();
    //     const user = [username, password];
    //     console.log(user);
    //     navigate("/dashboard")
    // }

    function verifyLogin(e) {
        const emails = ["rares@gmail.com", "mihai@gmail.com", "student@upb.ro"];
        if (emails.find(crtEmail => crtEmail === username)) {
            navigate("/search");
        } else {
            e.preventDefault();
            // Display error that there's no account for this email address
            console.log("invalid login");
            setInvalid(true);
        }

    }


    // useEffect(() => {
    //    UserService.getAllUsers().then((response) => {
    //        user = response.data
    //        console.log(user.username);
    //    }).catch(error => {
    //        console.log(error);
    //    })

    // }, [])

    return (
        <div style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="container3" style={{marginTop:"70px", marginBottom:"70px"}}>
                <div >
                    <div >
                        <h2 style={{color:"white", fontSize:"30px", paddingTop:"20px"}}> Log in</h2>
                        <div className="card-body">
                            <form>
                                <div class="row">
                                    <div className="col-25">
                                        <label className="mb-4">Name: </label>
                                    </div>
                                    <div className="col-75">
                                        <input type = "text" id="fname" placeholder = "Enter email..." name = "email" className = "form-control"
                                            
                                            onChange = {(event) => setUsername(event.target.value)}
                                            ></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label className="mb-4">Create a password: </label>
                                    </div>
                                    <div className="col-75">
                                        <input type = "password" id="fname" placeholder = "Enter password..." name = "password" className = "form-control"
                                            //value = {username}
                                            //</div>onChange = {(event) => setUsername(event.target.value)}
                                            ></input>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" onClick={(e)=>verifyLogin(e)}>Log in</button>
                                    <Link to="/" className="btn btn-dark" style={{ marginTop: "1px", marginLeft: "255px" }}><button>Exit</button></Link>
                                </div>
                            </form>
                            { invalid && <div className="invalidlogin"> Invalid username or password! Try again</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;