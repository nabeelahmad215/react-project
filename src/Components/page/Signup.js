import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { PostCall } from './PostCall';
import Swal from 'sweetalert';
import '../css/login.css';

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
            <div className="main">
                <form onSubmit={handleSubmit}>
                    <h1 className='h1'>Signup</h1>
                    <div className="inputBox">
                        <input type="text" name="company" required="required" />
                        <span>Company</span>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="mobile" required="required" />
                        <span>Contact Number</span>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="cnic" required="required" />
                        <span>CNIC (without dashes)</span>
                    </div>
                    <div className="inputBox">
                        <input type="email" name="email" required="required"
                            onChange={userHandler} />
                        <span>Email</span>
                    </div>

                    <div className="inputBox">
                        <input type="password" name="password" required="required"
                            onChange={passwordHandler} />
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

export default Signup;