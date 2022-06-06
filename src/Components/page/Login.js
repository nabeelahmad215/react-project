import '../css/login.css'
import { useEffect, useState } from 'react';
import { Link, Navigate, useHistory } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  
    useEffect(() => {
        if (localStorage.getItem('user-info')) {

        }
    }, [])

    async function signup() {
        console.warn(email, password)
        let item = { email, password };
        let result = await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))

    }
    return (
        <>
            <div class="login">
                <h1>Login</h1>
                <form>
                    <input type="email" name="email" placeholder="Email" required="required" 
                    onChange={(e)=>(setEmail(e.target.value))}/>
                    <input type="password" name="password" placeholder="Password" required="required" 
                    onChange={(e)=>(setPassword(e.target.value))}/>
                    <button type="submit" onClick={signup} class="btn btn-primary btn-block btn-large">Let me in.</button>
                </form>
            </div>
        </>
    );
}

export default Login;