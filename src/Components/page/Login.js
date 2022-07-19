import '../css/login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostCall } from './PostCall';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        PostCall('reactlogin', { email: email, password: password }, function (result) {
            console.log(result);
            nav("/");
        });
    }
    return (
        <>
         <div className='main'>
            <form onSubmit={handleSubmit}>
            <h1 className='h1'>Login</h1>
                    <div className="inputBox">
                        <input type="email" name="email" required="required" onChange={(e) => (setEmail(e.target.value))} />
                        <span>Email</span>
                    </div>
                    <div className="inputBox">
                        <input type="password" name="password" required="required" onChange={(e) => (setPassword(e.target.value))} />
                        <span>Password</span>
                    </div>
                    <div className="btn">
                        <input type="submit" />
                    </div>
            </form>
            </div>
        </>
    );
}

export default Login;