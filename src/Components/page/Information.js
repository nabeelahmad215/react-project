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
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [qualification, setQualification] = useState("");
    const [degree, setDegree] = useState("");
    const [institute, setInstitute] = useState("");
    const [completedate, setCompletedate] = useState("");
    const [basicsalary, setBasicsalary] = useState("");
    const [salarytax, setSalarytax] = useState("");
    const [grosssalary, setGrosssalary] = useState("");
    const [joindate, setJoindate] = useState("");
    const [emptype, setEmptype] = useState("");
    const [designation, setDesignation] = useState("");
    const [department, setDepartment] = useState("");
    const [status, setStatus] = useState("");


    let newval = salarytax / 100;
    function sum() {
        setGrosssalary(basicsalary - basicsalary * newval);
    }

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
            PostCall('emp-info', {
                emp_code: emp_code, name: name, fname: fname, gender: gender, dob: dob, religion: religion,
                marital: marital, cnic: cnic, contact: contact, address: address, qualification: qualification,
                degree: degree, institute: institute, completedate: completedate, basicsalary: basicsalary,
                salarytax: salarytax, grosssalary: grosssalary, joindate: joindate, emptype: emptype,
                designation: designation, department: department, status: status
            }, function (result) {
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
                                                        <option key={index} value={getemail.email}>{getemail.email}</option>
                                                    ))
                                                }
                                            </select>
                                        </td>
                                        <td>
                                            <select className='mytdinputinfo' name="marital" value={marital} onChange={(e) => (setMarital(e.target.value))}>
                                                <option>Marital Status</option>
                                                <option>Married</option>
                                                <option>Non-Married</option>
                                            </select>
                                        </td>
                                        <td><input type="text" name='cnic' onChange={(e) => (setCnic(e.target.value))} className='mytdinputinfo' /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Contact Number</label></td>
                                        <td><label>Address</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name='contact' onChange={(e) => (setContact(e.target.value))} className='mytdinputinfo' /></td>
                                        <td colSpan='3'><input type="text" name='address' onChange={(e) => (setAddress(e.target.value))} className='mytdinputinfo' /></td>
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
                                        <td><input type="text" name='qualification' onChange={(e) => (setQualification(e.target.value))} className='mytdinputinfo' /></td>
                                        <td><input type="text" name='degree' onChange={(e) => (setDegree(e.target.value))} className='mytdinputinfo' /></td>
                                        <td><input type="text" name='institute' onChange={(e) => (setInstitute(e.target.value))} className='mytdinputinfo' /></td>
                                        <td><input type="date" name='completedate' onChange={(e) => (setCompletedate(e.target.value))} className='mytdinputinfo' /></td>
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
                                            <input type="text" name='basicsalary' className='mytdinputinfo' value={basicsalary}
                                                onChange={(e) => setBasicsalary(+e.target.value)} />
                                        </td>
                                        <td>
                                            <input type="number" name='salarytax' className='mytdinputinfo' value={salarytax}
                                                onChange={(e) => setSalarytax(+e.target.value)} />
                                            <button type="button" onClick={sum} className="taxbtn"><i className="uil-focus-add del-btn"></i></button>
                                            {/* <i className="uil-focus-add del-btn" onClick={sum}></i> */}
                                        </td>
                                        <td>
                                            <input type="text" name='grosssalary' className='mytdinputinfo' readOnly value={grosssalary}
                                                onChange={(e) => setGrosssalary(e.target.value)} />
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
                                        <td><input type="date" name='joindate' onChange={(e) => (setJoindate(e.target.value))} className='mytdinputinfo' /></td>
                                        <td>
                                            <select className='mytdinputinfo' name="emptype" value={emptype} onChange={(e) => (setEmptype(e.target.value))}>
                                                <option>Type</option>
                                                <option>Permanent</option>
                                                <option>Internee</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input type="text" name='designation' className='mytdinputinfo' value={designation}
                                                onChange={(e) => setDesignation(e.target.value)} />
                                        </td>
                                        <td>
                                            <select className='mytdinputinfo' name="department" value={department} onChange={(e) => (setDepartment(e.target.value))}>
                                                <option>Department</option>
                                                <option>IT</option>
                                                <option>Admin</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className='mytdinputinfo' name="status" value={status} onChange={(e) => (setStatus(e.target.value))}>
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