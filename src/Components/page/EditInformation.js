import '../css/inform.css';
import { useEffect, useState } from 'react';
import { PostCall } from './PostCall';
import EmployeeLayout from './EmployeeLayout';
import Swal from 'sweetalert';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditInformation = () => {

    const [edituser, setEdituser] = useState({ name: '' });
    const navi = useNavigate();
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const edituserid = async () => {
            const reqdata = await fetch(`http://localhost:8000/api/empinfoedit/${id}`);
            const res = await reqdata.json();
            setEdituser(await res);
        }
        edituserid();
    }, []);

    const handleEdit = (e) => {
        setEdituser({ ...edituser, [e.target.name]: e.target.value});
    }

    function handleUpdate(e) {

        PostCall(`empinfoupdate/${id}`, edituser, function (result) {
            Swal({
                icon: 'success',
                title: 'Update!',
                text: 'Data Has Been Update.',
                showConfirmButton: true
            })
            navi("/info-history")
        });

        e.preventDefault();

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
                            <form onSubmit={handleUpdate}>
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
                                            <input type="text" name="emp_code" className='mytdinputinfo' value={edituser.emp_code} onChange={(e) => handleEdit(e)} />
                                            {/* {empcodeErr ? <span className='error'>Employee Code must be at least 5 characters long!</span> : ""} */}
                                        </td>

                                        <td>
                                            <input type="text" name="name" className='mytdinputinfo' value={edituser.name} onChange={(e) => handleEdit(e)} />
                                            {/* {nameErr ? <span className='error'>Full Name must be at least 5 characters long!</span> : ""} */}
                                        </td>
                                        <td>
                                            <input type="text" name="fname" className='mytdinputinfo' value={edituser.fname} onChange={(e) => handleEdit(e)} />
                                            {/* {fnameErr ? <span className='error'>User Not Valid</span> : ""} */}
                                        </td>
                                        <td>
                                            <select className='mytdinputinfo' name="gender" value={edituser.gender} onChange={(e) => handleEdit(e)} >
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
                                        <td><input type="date" name='dob' value={edituser.dob} onChange={(e) => handleEdit(e)} className='mytdinputinfo' /></td>
                                        <td>
                                            <select className='mytdinputinfo' name="religion" value={edituser.religion} onChange={(e) => handleEdit(e)}>
                                                <option>Religion</option>
                                                <option>Islam</option>
                                                <option>Jew</option>
                                                <option>Hindu</option>
                                                <option>Other</option>
                                                {/* {
                                                    email.map((getemail, index) => (
                                                        <option key={index} value={getemail.email}>{getemail.email}</option>
                                                    ))
                                                } */}
                                            </select>
                                        </td>
                                        <td>
                                            <select className='mytdinputinfo' name="marital" value={edituser.marital} onChange={(e) => handleEdit(e)}>
                                                <option>Marital Status</option>
                                                <option>Married</option>
                                                <option>Non-Married</option>
                                            </select>
                                        </td>
                                        <td><input type="text" name='cnic' value={edituser.cnic} onChange={(e) => handleEdit(e)} className='mytdinputinfo' /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Contact Number</label></td>
                                        <td><label>Address</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name='contact' value={edituser.contact} onChange={(e) => handleEdit(e)} className='mytdinputinfo' /></td>
                                        <td colSpan='3'><input type="text" name='address' value={edituser.address} onChange={(e) => handleEdit(e)} className='mytdinputinfo' /></td>
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
                                        <td><input type="text" name='qualification' value={edituser.qualification} onChange={(e) => handleEdit(e)} className='mytdinputinfo' /></td>
                                        <td><input type="text" name='degree' value={edituser.degree} onChange={(e) => handleEdit(e)} className='mytdinputinfo' /></td>
                                        <td><input type="text" name='institute' value={edituser.institute} onChange={(e) => handleEdit(e)} className='mytdinputinfo' /></td>
                                        <td><input type="date" name='completedate' value={edituser.completedate} onChange={(e) => handleEdit(e)} className='mytdinputinfo' /></td>
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
                                            <input type="text" name="basicsalary" className='mytdinputinfo' value={edituser.basicsalary}
                                                onChange={(e) => handleEdit(e)} />
                                        </td>
                                        <td>
                                            <input type="number" name="salarytax" className='mytdinputinfo' value={edituser.salarytax}
                                                onChange={(e) => handleEdit(e)} /> 
                                        </td>
                                        <td>
                                            <input type="text" name="grosssalary" className='mytdinputinfo' readOnly value={edituser.grosssalary}
                                                onChange={(e) => handleEdit(e)} />
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
                                        <td><input type="date" name='joindate' value={edituser.joindate} onChange={(e) => handleEdit(e)} className='mytdinputinfo' /></td>
                                        <td>
                                            <select className='mytdinputinfo' name="emptype" value={edituser.emptype} onChange={(e) => handleEdit(e)}>
                                                <option>Type</option>
                                                <option>Permanent</option>
                                                <option>Internee</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input type="text" name='designation' className='mytdinputinfo' value={edituser.designation} onChange={(e) => handleEdit(e)} />
                                        </td>
                                        <td>
                                            <select className='mytdinputinfo' name="department" value={edituser.department} onChange={(e) => handleEdit(e)}>
                                                <option>Department</option>
                                                <option>IT</option>
                                                <option>Admin</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className='mytdinputinfo' name="status" value={edituser.status} onChange={(e) => handleEdit(e)}>
                                                <option>Status</option>
                                                <option>Active</option>
                                                <option>Inactive</option>
                                            </select>
                                        </td>
                                    </tr>
                                </table>

                                <div className='btnposition'>
                                    <button type="submit" class="button button2">UPDATE</button>
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
export default EditInformation;