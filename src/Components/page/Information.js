import '../css/inform.css';
import { useEffect, useState } from 'react';
import { PostCall } from './PostCall';
import EmployeeLayout from './EmployeeLayout';
import Swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';

const Information = () => {
    const [emp_code, setEmpcode] = useState("");
    const [name, setName] = useState("");
    const [fname, setFname] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [religion, setReligion] = useState("");
    const [marital, setMarital] = useState("");
    const [cnic, setCnic] = useState("");
    const [contact, setReligion] = useState("");
    const [address, setReligion] = useState("");
    const [qualification, setReligion] = useState("");
    const [degree, setReligion] = useState("");
    const [institute, setReligion] = useState("");
    const [completedate, setReligion] = useState("");
    const [basicsalary, setReligion] = useState("");
    const [salarytax, setReligion] = useState("");
    const [grosssalary, setReligion] = useState("");
    const [joindate, setReligion] = useState("");
    const [emptype, setReligion] = useState("");
    const [designation, setReligion] = useState("");
    const [department, setReligion] = useState("");
    const [status, setReligion] = useState("");

    const [empcodeErr, setEmpcodeErr] = useState(false);
    const [nameErr, setNameErr] = useState(false);
    const [fnameErr, setFnameErr] = useState(false);

    const [email, setEmail] = useState([]);
    useEffect(() => {
        const getemail = async () => {
            const resemail = await fetch("http://localhost:8000/api/dropdown");
            const resem = await resemail.json();
            setEmail(await resem);
        }
        getemail();
    }, []);

    const nav = useNavigate();
    function handleSubmit(e) {
        if (emp_code.length === 0 || name.length === 0 ||
            name.length < 5 || fname.length === 0 || fname.length < 5) {
            Swal({
                icon: 'warning',
                title: 'WARNING!',
                text: 'Non-Validated Data',
                showConfirmButton: true
            })
        }
        else {
            PostCall('emp-info', { emp_code: emp_code, name: name, fname: fname, gender: gender, dob:dob, religion:religion }, function (result) {
                Swal({
                    icon: 'success',
                    title: 'Added!',
                    text: 'data has been Added.',
                    showConfirmButton: true
                })
                nav("/info-history")
            });
        }

        e.preventDefault();
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

    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [total, setTotal] = useState();
    let newval = num2 / 100;
    function sum() {
      setTotal(num1 - num1 * newval);
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
                                            <input type="text" name="emp_code" className='mytdinputinfo' value={emp_code} onChange={empCodeHandler} /><br />
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
                                            <select className='mytdinputinfo' name="gender" value={gender} onChange={(e) => (setGender(e.target.value))}>
                                                <option>Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>D.O.B</label></td>
                                        <td><label>Religion</label></td>
                                        <td><label>Marital Status</label></td>
                                        <td><label>CNIC (without dashes)</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="date" name='dob' onChange={(e) => (setDob(e.target.value))} className='mytdinputinfo' /></td>
                                        <td>
                                            <select className='mytdinputinfo' name="religion" value={religion} onChange={(e) => (setReligion(e.target.value))}>
                                                <option>Religion</option>
                                                <option>Islam</option>
                                                <option>Jew</option>
                                                <option>Hindu</option>
                                                <option>Other</option>
                                                {
                                                    email.map((getemail, index) => (
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
                                        <td>
                                            <input type="text" className='mytdinputinfo' value={num1}
                                                onChange={(event) => setNum1(+event.target.value)} />
                                        </td>
                                        <td>
                                            <input type="number" className='mytdinputinfo' value={num2}
                                                onChange={(event) => setNum2(+event.target.value)} />
                                            <button type="button" onClick={sum}>Calculate</button>
                                        </td>
                                        <td>
                                            <input type="text" className='mytdinputinfo' readOnly value={total} />
                                        </td>
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