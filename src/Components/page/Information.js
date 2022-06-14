import '../css/inform.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { PostCall } from './PostCall';
import EmployeeLayout from './EmployeeLayout';
import Swal from 'sweetalert';

const Information = () => {
    const [emp_code, setEmpcode] = useState("");
    const [name, setName] = useState("");
    const [fname, setFname] = useState("");
    const [gender, setGender] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        PostCall('emp-info', { emp_code: emp_code, name: name, fname: fname, gender: gender }, function (result) {
            Swal({
                icon: 'success',
                title: 'Added!',
                text: 'data has been Added.',
                showConfirmButton: true
            })
        });
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
                                        <td><input type="text" name="emp_code" className='mytdinputinfo' value={emp_code} onChange={(e) => (setEmpcode(e.target.value))} /></td>
                                        <td><input type="text" name="name" className='mytdinputinfo' value={name} onChange={(e) => (setName(e.target.value))} /></td>
                                        <td><input type="text" name="fname" className='mytdinputinfo' value={fname} onChange={(e) => (setFname(e.target.value))} /></td>
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
                                        <td><input type="date" className='mytdinputinfo' /></td>
                                        <td>
                                            <select className='mytdinputinfo'>
                                                <option>Religion</option>
                                                <option>Islam</option>
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
                                    <button class="button button1">HISTORY</button>
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