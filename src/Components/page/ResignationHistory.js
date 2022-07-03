import '../css/dashboard.css';
import EmployeeLayout from './EmployeeLayout';
import { useState, useEffect } from 'react';
import '../css/table.css';
import Swal from 'sweetalert';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PostCall } from './PostCall';

const ResignationHistory = () => {
    const [email, setEmail] = useState([]);
    useEffect(() => {
        const getemail = async () => {
            const resemail = await fetch("http://localhost:8000/api/resignationhistory");
            const resem = await resemail.json();
            setEmail(await resem);
        }
        getemail();
    }, []);

    const nav = useNavigate();
    let deleteEmp = async (id) => {
        let res = await fetch(`http://localhost:8000/api/resignationdelete/${id}`);
        if (res = true) {
            nav("/demo-resignation-history")
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

    const [status, setStatus] = useState("");

    const { id } = useParams();
    console.log(id);

    function handleUpdate(id) {
        PostCall(`statusupdate/${id}`, {
            status: status
        }, function (result) {
            Swal({
                icon: 'success',
                title: 'Added!',
                text: 'data has been Added.',
                showConfirmButton: true
            })
            nav("/demo-resignation-history")
        });

        id.preventDefault();

    }
    return (
        <>
            <div>
                <EmployeeLayout />
                <div class="p-4">
                    <div class="welcome">
                        <div class="content rounded-3 p-2">
                            <h1 class="fs-5">Employee / Employee Resignation History</h1>
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
                                        <th>Employee Code</th>
                                        <th>Resign Date</th>
                                        <th>Notice Date</th>
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
                                                        <td>{row.resignation_date}</td>
                                                        <td>{row.notice_date}</td>
                                                        <td>
                                                            <select value={row.status} onChange={(e) => (setStatus(e.target.value))}>
                                                                <option></option>
                                                                <option>Active</option>
                                                                <option>Inactive</option>
                                                            </select></td>
                                                        <td>
                                                            <Link to={`/edit-resign/${row.id}`}><i className="uil-pen del-btn"></i></Link> | <i className="uil-check del-btn" onClick={() => handleUpdate(row.id)}></i> | <i className="uil-trash-alt del-btn" onClick={() => deleteEmp(row.id)}></i>
                                                        </td>
                                                    </tr>
                                                )
                                            }

                                            ) :
                                            <tr className='mytr'><td>No Record!</td></tr>
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

export default ResignationHistory;