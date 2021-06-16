  import React, { useState } from 'react'
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';



function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const singIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
            history.push('/')
            })
        .catch(error=>alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
        if (auth) {
            history.push('/')
           }
           
            })
        .catch(error=>alert(error.message))
    }


  return (
      <div className="login">
          <Link to="/">
        <img
            className="login_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        />
          </Link>
          <div className="login_containers">
              <h1>Sign-in</h1>
              <form>
                  <h5> E-mail</h5>
                  <input type="text" value={email} onChange={ e=> setEmail(e.target.value)}/>
                  
                  <h5> Password</h5>
                  <input type="password"  value={password} onChange={ e=> setPassword(e.target.value)}/><br/>
                  
                  <button type='submit' onClick={singIn}>Sing In</button>
              </form>
              <p> By singing-in you agree to the AMAZON Fake CLONE conditions of Use $ Sale. Please see our Privacy Notice, our Cookies Notice and oru Interest-BAsed ADss Notice. </p>
              <Link to ="/SignUp">
              <button
                  className="loin_registerButton" onClick={register}>
                      Create your Amazon Account
                       
         </button>
         </Link>
          </div>
      
    </div>
  )
}

export default Login
