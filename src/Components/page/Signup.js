
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { PostCall } from './PostCall';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nav = useNavigate();
    const handleSubmit =(e)=>{
        e.preventDefault();
        PostCall('register',{email:email,password:password}, function(result){
            console.log(result);
            nav("/login");
        });
    }
    
    return (
        <>
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                <input type="text" name="company" placeholder="Company Name" />
                <input type="text" name="mobile" placeholder="03001234567" />
                <input type="text" name="cnic" placeholder="CNIC (without dashes)" />
                <input type="email" name="email" placeholder="Email" required="required" value={email}
                    onChange={(e) => (setEmail(e.target.value))} />
                <input type="password" name="password" placeholder="Password" required="required" value={password}
                    onChange={(e) => (setPassword(e.target.value))} />
                <button type="submit" class="btn btn-primary btn-block btn-large">Let me in.</button>
                </form>
            </div>
        </>
    );
}

export default Signup;