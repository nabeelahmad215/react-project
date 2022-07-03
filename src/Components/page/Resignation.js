import '../css/inform.css';
import EmployeeLayout from './EmployeeLayout';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PostCall } from './PostCall';
import Swal from 'sweetalert';

const Resignation = () => {
    const [email, setEmail] = useState([]);
    useEffect(() => {
        const getemail = async () => {
            const resemail = await fetch("http://localhost:8000/api/empdropdown");
            const resem = await resemail.json();
            setEmail(await resem);
        }
        getemail();
    }, []);

    const [doc_date, setDoc_date] = useState("");
    const [emp_id, setEmp_id] = useState("");
    const [resignation_date, setResignation_date] = useState("");
    const [notice_date, setNotice_date] = useState("");
    const [detail, setDetail] = useState("");
    const nav = useNavigate();

    function handleSubmit(e) {
        PostCall('resignation', {
            doc_date: doc_date, emp_id: emp_id, resignation_date: resignation_date, notice_date: notice_date, detail: detail
        }, function (result) {
            Swal({
                icon: 'success',
                title: 'Added!',
                text: 'data has been Added.',
                showConfirmButton: true
            })
            nav("/resignation-history")
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
                            <h1 class="fs-5">Employee / Resignation</h1>
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <div class="welcome">
                        <div class="content rounded-3 p-2">
                            <form onSubmit={handleSubmit}>
                                <table className='mytable'>
                                    <tr>
                                        <td><label>Doc Date</label></td>
                                        <td><label>Resignation Date</label></td>
                                        <td><label>Notice Date</label></td>
                                        <td><label>Employee Name</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="date" name='doc_date' onChange={(e) => (setDoc_date(e.target.value))} className='mytdinput' /></td>
                                        <td><input type="date" name='resignation_date' onChange={(e) => (setResignation_date(e.target.value))} className='mytdinput' /></td>
                                        <td><input type="date" name='notice_date' onChange={(e) => (setNotice_date(e.target.value))} className='mytdinput' /></td>
                                        <td>
                                            <select className='mytdinput' name='emp_id' onChange={(e) => (setEmp_id(e.target.value))}>
                                                <option>---Select Any Value---</option>
                                                {  
                                                    email.map((getemail, index) => (
                                                        <option key={index} value={getemail.id}>[{getemail.emp_code}] ~ {getemail.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan='2'><label>Resignation Detail</label></td>
                                    </tr>
                                    <tr>
                                        <td colSpan='4'><textarea type="text" name='detail' onChange={(e) => (setDetail(e.target.value))} rows="4" cols="148" className='textarea' /></td>
                                    </tr>
                                </table>
                                <div className='btnposition'>
                                    <button type="submit" class="button button2">SAVE</button>
                                    <Link to="/resignation-history"><button class="button button1">HISTORY</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Resignation;