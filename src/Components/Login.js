import './css/login.css';
import './js/inputs.js';
import React from 'react';
import logo from './img/logo.jpg';
import man from './img/man.svg';

class Login extends React.Component {
    render() {
        return (
            <>
            <script src="https://kit.fontawesome.com/ab00d86059.js" crossorigin="anonymous"></script>
        <img className="wave" src="https://raw.githubusercontent.com/Jhonierpc/WebDevelopment/master/Login%20Responsive/img/wave.png" alt=""/>
        <div className="container">
            <div className="img">
                <img src={man} alt=""/>
            </div>
            <div className="login-container">
                <form method="post" action="">
                    <img className="avatar" src={logo} alt=""/>
                    <h2>Welcome</h2>
                    <div className="input-div one">
                        <div className="i">
                            <i className="fas fa-user"></i>
                        </div>
                        <div>
                            <h5>Email</h5>
                            <input className="input" type="email" name="email"/>
                        </div>
                    </div>
                    <div className="input-div two">
                        <div className="i">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div>
                            <h5>Password</h5>
                            <input className="input" type="password" name="password"/>
                        </div>
                    </div>
                    <a href="#">Forgot Pasword</a>
                    <input className="btn" type="submit" value="Login"/>
                </form>
            </div>
        </div>
        </>
        );
    }
}

export default Login;