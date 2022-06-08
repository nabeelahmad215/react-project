import '../css/login.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostCall } from './PostCall';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate();
    const handleSubmit =(e)=>{
        e.preventDefault();
        PostCall('reactlogin',{email:email,password:password}, function(result){
            console.log(result);
            nav("/");
        });
    }
    return (
        <>
            <div class="login">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email" required="required" value={email}
                    onChange={(e)=>(setEmail(e.target.value))}/>
                    <input type="password" name="password" placeholder="Password" required="required" value={password}
                    onChange={(e)=>(setPassword(e.target.value))}/>
                    <button type="submit" class="btn btn-primary btn-block btn-large">Let me in.</button>
                </form>
            </div>
        </>
    );
}

export default Login;