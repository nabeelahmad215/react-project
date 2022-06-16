import '../css/inform.css';
import { useEffect, useState } from 'react';
import { PostCall } from './PostCall';
import EmployeeLayout from './EmployeeLayout';
import Swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';

const Information = () => {
    const [emp_code, setEmpcode] = useState("");
    const [empcodeErr, setEmpcodeErr] = useState(false);
    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState(false);
    const [fname, setFname] = useState("");
    const [fnameErr, setFnameErr] = useState(false);
    const [gender, setGender] = useState("");
    const [genderErr, setGenderErr] = useState(false);

    const [email, setEmail] = useState([]);
    useEffect( ()=>{
        const getemail = async ()=>{
            const resemail = await fetch("http://localhost:8000/api/dropdown");
            const resem = await resemail.json();
            setEmail(await resem);
        }
        getemail();
    },[]);

    const nav = useNavigate();
    function handleSubmit(e) {
        if (emp_code.length === 0 || name.length === 0 || 
            name.length < 5 ||fname.length === 0 || fname.length < 5 
            || gender !== 'Male' || gender !== 'Female' ) {
            Swal({
                icon: 'warning',
                title: 'WARNING!',
                text: 'Non-Validated Data',
                showConfirmButton: true
            })
        }
        else {
            PostCall('emp-info', { emp_code: emp_code, name: name, fname: fname, gender: gender }, function (result) {
                Swal({
                    icon: 'success',
                    title: 'Added!',
                    text: 'data has been Added.',
                    showConfirmButton: true
                })
                nav("/info-history")
            });
        }

        e.preventDefault()
    }

    function empCodeHandler(e) {
        let item = e.target.value;
        if (item.length === 0) {
            setEmpcodeErr(false)
        }
        else if (item.length < 5) {
            setEmpcodeErr(true)
        }
        else {
            setEmpcodeErr(false)
        }
        setEmpcode(item)
    }
    function nameHandler(e) {
        let item = e.target.value;
        if (item.length === 0) {
            setNameErr(false)
        }
        else if (item.length < 5) {
            setNameErr(true)
        }
        else {
            setNameErr(false)
        }
        setName(item)

    }
    function fnameHandler(e) {
        let item = e.target.value;
        if (item.length === 0) {
            setFnameErr(false)
        }
        else if (item.length < 5) {
            setFnameErr(true)
        }
        else {
            setFnameErr(false)
        }
        setFname(item)

    }

    function genderHandler(e) {
        let item = e.target.value;
        if (item !== 'Gender') {
            setGenderErr(false)
        }
        else if (item == 'Gender') {
            setGenderErr(true)
        }
        else {
            setGenderErr(false)
        }
        setGender(item)

    }

    return (
        <>
            <div>
                <EmployeeLayout />
                <div class="p-4">
                    <div class="welcome">
                        <div class="content rounded-3 p-2">
                            <h1 class="fs-5">Employee / Employee Information</h1>
                        </div>
                    </div>
                </div>
                <div class="p-4 mybox">
                    <div class="welcome">
                        <div class="content rounded-3 p-2">
                            <form onSubmit={handleSubmit}>
                                <u><h3>Personal Information</h3></u>
                                <table className='mytableinfo'>
                                    <tr>
                                        <td><label>Employee Code</label></td>
                                        <td><label>Full Name</label></td>
                                        <td><label>Father/Husband Name</label></td>
                                        <td><label>Gender</label></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" name="emp_code" className='mytdinputinfo' value={emp_code} onChange={empCodeHandler} /><br/>
                                            {empcodeErr ? <span className='error'>Employee Code must be at least 5 characters long!</span> : ""}
                                        </td>
                                        <td>
                                            <input type="text" name="name" className='mytdinputinfo' value={name} onChange={nameHandler} />
                                            {nameErr ? <span className='error'>Full Name must be at least 5 characters long!</span> : ""}
                                            </td>
                                        <td>
                                            <input type="text" name="fname" className='mytdinputinfo' value={fname} onChange={fnameHandler} />
                                            {fnameErr ? <span className='error'>User Not Valid</span> : ""}
                                            </td>
                                        <td>
                                            <select className='mytdinputinfo' name="gender" value={gender} onChange={genderHandler}>
                                                <option>Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                            {genderErr ? <span className='error'>Please select Gender</span> : ""}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>D.O.B</label></td>
                                        <td><label>Religion</label></td>
                                        <td><label>Marital Status</label></td>
                                        <td><label>CNIC (without dashes)</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="date" className='mytdinputinfo' /></td>
                                        <td>
                                            <select className='mytdinputinfo'>
                                                <option>Religion</option>
                                                <option>Islam</option>
                                                {
                                                    email.map((getemail, index)=>(
                                                        <option key={index} value={getemail.id}>{getemail.email}</option>
                                                    ))
                                                }
                                            </select>
                                        </td>
                                        <td>
                                            <select className='mytdinputinfo'>
                                                <option>Marital Status</option>
                                                <option>Married</option>
                                                <option>Non-Married</option>
                                            </select>
                                        </td>
                                        <td><input type="text" className='mytdinputinfo' /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Contact Number</label></td>
                                        <td><label>Address</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" className='mytdinputinfo' /></td>
                                        <td colSpan='3'><input type="text" className='mytdinputinfo' /></td>
                                    </tr>
                                </table>
                                <u><h3 style={{ marginTop: 15 }}>Education</h3></u>
                                <table className='mytableinfo'>
                                    <tr>
                                        <td><label>Qualification</label></td>
                                        <td><label>Degree Title</label></td>
                                        <td><label>Institution</label></td>
                                        <td><label>Completion Date</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" className='mytdinputinfo' /></td>
                                        <td><input type="text" className='mytdinputinfo' /></td>
                                        <td><input type="text" className='mytdinputinfo' /></td>
                                        <td><input type="date" className='mytdinputinfo' /> </td>
                                    </tr>
                                </table>
                                <u><h3 style={{ marginTop: 15 }}>Payroll</h3></u>
                                <table className='mytableinfo'>
                                    <tr>
                                        <td><label>Basic Salary</label></td>
                                        <td><label>Tax Percentage</label></td>
                                        <td><label>Gross Salary</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" className='mytdinputinfo' /></td>
                                        <td><input type="number" className='mytdinputinfo' /></td>
                                        <td><input type="text" className='mytdinputinfo' /></td>
                                    </tr>
                                </table>
                                <u><h3 style={{ marginTop: 15 }}>Joining</h3></u>
                                <table className='mytableinfo'>
                                    <tr>
                                        <td><label>Joining Date</label></td>
                                        <td><label>Employee Type</label></td>
                                        <td><label>Designation</label></td>
                                        <td><label>Department</label></td>
                                        <td><label>Status</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="date" className='mytdinputinfo' /></td>
                                        <td>
                                            <select className='mytdinputinfo'>
                                                <option>Type</option>
                                                <option>Permanent</option>
                                                <option>Internee</option>
                                            </select>
                                        </td>
                                        <td><input type="text" className='mytdinputinfo' /></td>
                                        <td>
                                            <select className='mytdinputinfo'>
                                                <option>Department</option>
                                                <option>IT</option>
                                                <option>Admin</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className='mytdinputinfo'>
                                                <option>Status</option>
                                                <option>Active</option>
                                                <option>Inactive</option>
                                            </select>
                                        </td>
                                    </tr>
                                </table>

                                <div className='btnposition'>
                                    <button type="submit" class="button button2">SAVE</button>
                                    <Link to="/info-history"><button class="button button1">HISTORY</button></Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Information;