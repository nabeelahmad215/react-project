import '../css/inform.css';
import EmployeeLayout from './EmployeeLayout';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { PostCall } from './PostCall';
import Swal from 'sweetalert';

const Promotion = () => {

    const [email, setEmail] = useState([]);
    const [getid, setGetid] = useState('');
    const [getrowdata, setGetrowdata] = useState('');
    const [emp_id, setEmp_id] = useState('');
    const [promotion_date, setPromotion_date] = useState('');
    const [promoted_to, setPromoted_to] = useState('');
    const [promoted_salary, setPromoted_salary] = useState('');
    const [promoted_tax, setPromoted_tax] = useState('');
    const [promoted_gross, setPromoted_gross] = useState('');
    const [detail, setDetail] = useState('');

    useEffect(() => {
        const getemail = async () => {
            const resemail = await fetch("http://localhost:8000/api/empdropdown");
            const resem = await resemail.json();
            setEmail(await resem);
        }
        getemail();
    }, []);

    const handleEmpid = (e) => {
        const getid = e.target.value;
        setGetid(getid);
    }
    const handleEmpstate = (e) => {
        const newname = e.target.value;
        setEmp_id(newname);
    }

    function handleStateId(e){
        handleEmpid(e);
        handleEmpstate(e);
    }


    useEffect(() => {
        const getrowdata = async () => {
            const reqRowdata = await fetch(`http://localhost:8000/api/empfetch/${getid}`);
            const resrowdata = await reqRowdata.json();
            setGetrowdata(await resrowdata);
        }
        getrowdata();
    }, [getid]);

    const nav = useNavigate();

    function handleSubmit(e) {
        PostCall('promotion', {
         emp_id:emp_id, promotion_date:promotion_date, promoted_to:promoted_to, promoted_salary:promoted_salary, 
            promoted_tax:promoted_tax, promoted_gross:promoted_gross, detail:detail
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
                            <h1 class="fs-5">Employee / Promotion</h1>
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <div class="welcome">
                        <div class="content rounded-3 p-2">
                            <form onSubmit={handleSubmit}>
                                <table className='mytable'>
                                    <tr>
                                        <td><label>Employee Name</label></td>
                                        <td><label>Promotion Date</label></td>
                                        <td><label>Promoted From</label></td>
                                        <td><label>Promoted To</label></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <select className='mytdinput' name="emp_id" onChange={handleStateId}>
                                                <option></option>
                                                {
                                                    email.map((getemail, index) => (
                                                        <option key={index} value={getemail.id}>[{getemail.emp_code}] ~ {getemail.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </td>
                                        <td><input type="date" className='mytdinput' onChange={(e) => (setPromotion_date(e.target.value))}/></td>
                                        <td><input type="text" className='mytdinput' value={getrowdata.designation}/></td>
                                        <td><input type="text" className='mytdinput' onChange={(e) => (setPromoted_to(e.target.value))}/></td>
                                    </tr>
                                    <tr>
                                        <td><label>Current Basic Salary</label></td>
                                        <td><label>Promoted Basic Salary</label></td>
                                        <td><label>Salary Tax</label></td>
                                        <td><label>Gross Salary</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" className='mytdinput' value={getrowdata.basicsalary} /></td>
                                        <td><input type="text" className='mytdinput' onChange={(e) => (setPromoted_salary(e.target.value))}/></td>
                                        <td><input type="text" className='mytdinput' onChange={(e) => (setPromoted_tax(e.target.value))}/></td>
                                        <td><input type="text" className='mytdinput' onChange={(e) => (setPromoted_gross(e.target.value))}/></td>
                                    </tr>
                                    <tr>
                                        <td><label>Detail</label></td>
                                    </tr>
                                    <tr>
                                        <td colSpan='4'><textarea type="detail" rows="4" cols="148" className='textarea' onChange={(e) => (setDetail(e.target.value))}/></td>
                                    </tr>
                                </table>
                                <div className='btnposition'>
                                    <button type="submit" class="button button2">SAVE</button>
                                    <Link to="/promotion-history"><button class="button button1">HISTORY</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Promotion;