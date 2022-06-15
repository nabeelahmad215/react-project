
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { PostCall } from './PostCall';
import Swal from 'sweetalert';
import '../css/inform.css';

function Signup() {
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState(false);

    const nav = useNavigate();
    function handleSubmit(e) {
        if (email.length < 5 || password.length < 3) {
            Swal({
                icon: 'warning',
                title: 'WARNING!',
                text: 'Non-Validated Data',
                showConfirmButton: true
            })
        }
        else {
            PostCall('register', { email: email, password: password }, function (result) {
                Swal({
                    icon: 'success',
                    title: 'Added!',
                    text: 'data has been Added.',
                    showConfirmButton: true
                })
                nav("/login")
            });
        }

        e.preventDefault()
    }

    function userHandler(e) {
        let item = e.target.value;
        if (item.length === 0) {
            setEmailErr(false)
        }
        else if (item.length < 5) {
            setEmailErr(true)
        }
        else {
            setEmailErr(false)
        }
        setEmail(item)
    }
    function passwordHandler(e) {
        let item = e.target.value;
        if (item.length === 0) {
            setPasswordErr(false)
        }
        else if (item.length < 3) {
            setPasswordErr(true)
        }
        else {
            setPasswordErr(false)
        }
        setPassword(item)

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
                        onChange={userHandler} /><br />
                    {emailErr ? <span className='error'>User Not Valid</span> : ""}<br/>
                    <input type="password" name="password" placeholder="Password" required="required" value={password}
                        onChange={passwordHandler} />{passwordErr ? <span>Password Not Valid</span> : ""}
                    <button type="submit" class="btn btn-primary btn-block btn-large">Let me in.</button>
                </form>
                {/* <button type="submit" onClick={popup} class="btn btn-primary btn-block btn-large">Let me in.</button> */}
            </div>
        </>
    );
}

export default Signup;