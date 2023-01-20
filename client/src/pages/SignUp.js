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
            <div className="container-auth" style={{marginTop:"70px", marginBottom:"70px"}}>
                <div>
                    <div>
                        <h2 className="title-auth"> Sign up </h2>
                        <div className="card-body">
                            <form>
                                <div class="row-auth">
                                    <div className="col-name">
                                        <label className="mb-auth">Name: </label>
                                    </div>
                                    <div className="col-field">
                                        <input type = "auth" placeholder = "Enter email..." name = "email" className = "form-auth"
                                            //value = {username}
                                            //</div>onChange = {(event) => setUsername(event.target.value)}
                                            ></input>
                                    </div>
                                </div>
                                <div className="row-auth">
                                    <div className="col-name">
                                        <label className="mb-auth">Password: </label>
                                    </div>
                                    <div className="col-field">
                                        <input type = "auth" placeholder = "Enter password..." name = "password" className = "form-auth"
                                            //value = {username}
                                            //</div>onChange = {(event) => setUsername(event.target.value)}
                                            ></input>
                                    </div>
                                </div>
                                <div>
                                    <Link to="/"  className="btn" style={{marginBottom:"1px", float: "left"}}><button /* onClick={(event) => checkCredentials(event)} */>Sign up</button></Link>
                                    <Link to="/" className="btn"  style={{marginTop:"1px", float: "right"}}><button>Exit</button></Link>
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