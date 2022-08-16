import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom";
import { Firebase } from "../../firebase/config";
import Logo from "../../olx-logo.png";
import RoundLoading from "../Loading/RoundLoading";
import "./Login.css";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading,setLoading]=useState(false)
  const history = useHistory()
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    Firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push("/")
    }).catch((error)=>{
      alert(error.message)
    })

  };
  return (<>
    {loading }
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src="https://thumbs.dreamstime.com/b/shopping-basket-buy-sell-logo-vector-red-101315335.jpg" style={{height:250,width:250,borderRadius:100}} alt=""></img>
        <form onSubmit={handleSubmit}>
          <label style={{color:"white"}}>Email</label>
          <br />
          <input
            className="input"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label style={{color:"white"}}>Password</label>
          <br />
          <input
          
            className="input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/signup" style={{color:"white"}}>Signup</Link>
      </div> 
    </div>
    </>
  );
}

export default Login;
