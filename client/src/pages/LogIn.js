//import UserService from "../services/UserService";
import {Link} from "react-router-dom";
import "../styles/Auth.css";
import BannerImage from "../assets/auth.jpg";
import "../styles/Footer.css";



const LogIn = () => {
    /*const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let [user, setUser] = useState([]);
    const navigate =  useNavigate();


    const checkCredentials = (event) => {
        event.preventDefault();
        const user = [username, password];
         console.log(user);
         navigate("/dashboard")
    }

    useEffect(() => {
       UserService.getAllUsers().then((response) => {
           user = response.data
           console.log(user.username);
       }).catch(error => {
           console.log(error);
       })

    }, []) */

    return (
        <div style={{ backgroundImage: `url(${BannerImage})`, height:"700px" }}>
            <div className="container-auth" style={{marginTop:"70px", marginBottom:"70px"}}>
                <div >
                    <div >
                        <h2 className="title-auth"> Log in</h2>
                        <div className="card-body">
                            <form>
                                <div class="row-auth">
                                    <div className="col-name">
                                        <label className="mb-auth">Name: </label>
                                    </div>
                                    <div className="col-field">
                                        <input className = "form-auth" type = "auth" placeholder = "Enter email..." name = "email"
                                            //value = {username}
                                            //</div>onChange = {(event) => setUsername(event.target.value)}
                                            ></input>
                                    </div>
                                </div>
                                <div className="row-auth">
                                    <div className="col-name">
                                        <label className="mb-auth">Create a password: </label>
                                    </div>
                                    <div className="col-field">
                                        <input className = "form-auth" type = "auth" placeholder = "Enter password..." name = "password"
                                            //value = {username}
                                            //</div>onChange = {(event) => setUsername(event.target.value)}
                                            ></input>
                                    </div>
                                </div>
                                <div>
                                    <Link to="/search"  className="btn" style={{marginBottom:"1px", float:"left"}}><button /* onClick={(event) => checkCredentials(event)} */>Log in</button></Link>
                                    <Link to="/" className="btn"  style={{marginTop:"1px",  float:"right"}}><button>Exit</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;