
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { PostCall } from './PostCall';
import Swal from 'sweetalert';

function Signup() {
    const [company, setCompany] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nav = useNavigate();
    const handleSubmit =(e)=>{
        e.preventDefault();
        PostCall('register',{company:company,email:email,password:password}, function(result){
            Swal({
                icon: 'success',
                title: 'Added!',
                text:  'data has been Added.',
                showConfirmButton: true
            })
            nav("/login")
        });
    }

        
    return (
        <>
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                <input type="text" name="company" placeholder="Company Name" value={company}
                onChange={(e) => (setCompany(e.target.value))}/>
                <input type="text" name="mobile" placeholder="03001234567" />
                <input type="text" name="cnic" placeholder="CNIC (without dashes)" />
                <input type="email" name="email" placeholder="Email" required="required" value={email}
                    onChange={(e) => (setEmail(e.target.value))} />
                <input type="password" name="password" placeholder="Password" required="required" value={password}
                    onChange={(e) => (setPassword(e.target.value))} />
                <button type="submit" class="btn btn-primary btn-block btn-large">Let me in.</button>
                </form>
                {/* <button type="submit" onClick={popup} class="btn btn-primary btn-block btn-large">Let me in.</button> */}
            </div>
        </>
    );
}

export default Signup;