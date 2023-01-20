import React, { useState } from "react";
//import UserService from "../services/UserService";
import {Link} from "react-router-dom";
import '../styles/Auth.css';
import BannerImage from "../assets/auth.jpg";

const SignIn = () => {
    /*const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const saveUser = (event) => {
        event.preventDefault();
        const user = {username,password};

        console.log(user);
        UserService.saveUser(user).then((response) => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
        } */
    
    return (
        <div style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="container3" style={{marginTop:"70px", marginBottom:"70px"}}>
                <div>
                    <div>
                        <h2 style={{color:"white"}}> Sign up </h2>
                        <div className="card-body">
                            <form>
                                <div class="row">
                                    <div className="col-25">
                                        <label className="mb-4">Name: </label>
                                    </div>
                                    <div className="col-75">
                                        <input type = "text" id="fname" placeholder = "Enter email..." name = "email" className = "form-control"
                                            //value = {username}
                                            //</div>onChange = {(event) => setUsername(event.target.value)}
                                            ></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label className="mb-4">Password: </label>
                                    </div>
                                    <div className="col-75">
                                        <input type = "password" id="fname" placeholder = "Enter password..." name = "password" className = "form-control"
                                            //value = {username}
                                            //</div>onChange = {(event) => setUsername(event.target.value)}
                                            ></input>
                                    </div>
                                </div>
                                <div>
                                    <Link to="/"  className="btn" style={{marginBottom:"1px", marginLeft: "5px"}}><button /* onClick={(event) => checkCredentials(event)} */>Sign up</button></Link>
                                    <Link to="/" className="btn btn-dark"  style={{marginTop:"1px", marginLeft: "255px"}}><button>Exit</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default SignIn