import '../css/dashboard.css';
import { useState, useEffect } from 'react';
import '../css/table.css';
import Swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';
import PayrollLayout from './PayrollLayout';

const ReimburstmentHistory = () => {
    const [email, setEmail] = useState([]);
    useEffect(() => {
        const getemail = async () => {
            const resemail = await fetch("http://localhost:8000/api/reimburs-history");
            const resem = await resemail.json();
            setEmail(await resem);
        }
        getemail();
    }, []);

    const nav =useNavigate();
    let deleteEmp = async (id) => {
        let res= await fetch(`http://localhost:8000/api/reimbursdelete/${id}`);
        if (res = true) {
            nav("/demo-reimburs-history")
            Swal({
                title: 'Deleted!',
                text: "Redirecting...",
                icon: 'warning',
                dangerMode: true,
                timer: 3000,
                buttons: false
            })      
        }
    }

    return (
        <>
            <div>
                <PayrollLayout />
                <div class="p-4">
                    <div class="welcome">
                        <div class="content rounded-3 p-2">
                            <h1 class="fs-5">Payroll / Reimburstment History</h1>
                        </div>
                    </div>
                </div>
                <div class="p-4 mybox">
                    <div class="welcome">
                        <div class="content rounded-3 p-2">
                            <table className="table table-striped">
                                <thead>
                                    <tr className='mytr'>
                                    <th>Doc Date</th>
                                        <th>Emp Code</th>
                                        <th>Employee Name</th>
                                        <th>Category</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        email.length > 0 ?
                                            email.map((row) => {
                                                return (
                                                    <tr className='mytr'>
                                                        <td>{row.doc_date}</td>
                                                        <td>{row.emp_code}</td>
                                                        <td>{row.name}</td>
                                                        <td>{row.category}</td>
                                                        <td>{row.amount}</td>
                                                        <td>{row.status}</td>
                                                        <td>
                                                            <Link to={`/edit-reimburstment/${row.id}`}><i className="uil-pen del-btn"></i></Link> | <i className="uil-trash-alt del-btn" onClick={() => deleteEmp(row.id)}></i>
                                                        </td>
                                                    </tr>
                                                )
                                            }

                                            ) :
                                            <tr className='mytr'><td colSpan='7'>No Record!</td></tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReimburstmentHistory;