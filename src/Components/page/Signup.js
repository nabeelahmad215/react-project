
import { useEffect, useState } from 'react';
import { Link, Navigate, useHistory } from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signUp() {
        let item = { email, password }
        console.warn(email, password)


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
            <div className="login">
                <h1>Login</h1>
                <input type="text" name="company" placeholder="Company Name" />
                <input type="text" name="mobile" placeholder="03001234567" />
                <input type="text" name="cnic" placeholder="CNIC (without dashes)" />
                <input type="email" name="email" placeholder="Email" required="required" value={email}
                    onChange={(e) => (setEmail(e.target.value))} />
                <input type="password" name="password" placeholder="Password" required="required" value={password}
                    onChange={(e) => (setPassword(e.target.value))} />
                <Link to="/login"><button onClick={signUp} class="btn btn-primary btn-block btn-large">Let me in.</button></Link>
            </div>
        </>
    );
}

export default Signup;