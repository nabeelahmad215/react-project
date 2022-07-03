import '../css/dashboard.css';
import { useState, useEffect } from 'react';
import '../css/table.css';
import LeaveLayout from './LeaveLayout';
import Swal from 'sweetalert';
import { Link, useNavigate, useParams} from 'react-router-dom';
import { PostCall } from './PostCall';

const ApprovalLog = () => {
    const [email, setEmail] = useState([]);
    useEffect(() => {
        const getemail = async () => {
            const resemail = await fetch("http://localhost:8000/api/all");
            const resem = await resemail.json();
            setEmail(await resem);
        }
        getemail();
    }, []);

    const nav = useNavigate();
    let deleteEmp = async (id) => {
        let res = await fetch(`http://localhost:8000/api/leavedelete/${id}`);
        if (res = true) {
            nav("/demo-leave-all")
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
        PostCall(`leave-status/${id}`, {
            status: status
        }, function (result) {
            Swal({
                icon: 'success',
                title: 'Added!',
                text: 'data has been Added.',
                showConfirmButton: true
            })
            nav("/demo-leave-all")
        });

        id.preventDefault();

    }

    return (
        <>
            <div>
                <LeaveLayout />
                <div class="p-4">
                    <div class="welcome">
                        <div class="content rounded-3 p-2">
                            <h1 class="fs-5">Leave / Approval Log</h1>
                        </div>
                    </div>
                </div>
                <div class="p-4 mybox">
                    <div class="welcome">
                        <div class="content rounded-3 p-2">
                            <div className='approvalbtnposition'>
                                <Link to="/approval-log"><button className="button btn1" style={{ backgroundColor: "#008CBA", color: "white" }}>ALL</button></Link>
                                <Link to="/approval-log/pending"><button className="button btn2">PENDING</button></Link>
                                <Link to="/approval-log/approved"><button className="button btn3">APPROVED</button></Link>
                                <Link to="/approval-log/reject"><button className="button btn4">REJECT</button></Link>
                            </div>
                            <table className="table table-striped">
                                <thead>
                                    <tr className='mytr'>
                                        <th>Employee Code</th>
                                        <th>Employee Name</th>
                                        <th>From Date</th>
                                        <th>To Date</th>
                                        <th>Type</th>
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
                                                        <td>{row.emp_code}</td>
                                                        <td>{row.name}</td>
                                                        <td>{row.from_date}</td>
                                                        <td>{row.to_date}</td>
                                                        <td>{row.type}</td>
                                                        <td>
                                                            <select value={row.status} onChange={(e) => (setStatus(e.target.value))}>
                                                                <option></option>
                                                                <option>Pending</option>
                                                                <option>Approved</option>
                                                                <option>Reject</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                        <i className="uil-check del-btn" onClick={() => handleUpdate(row.id)}></i> | <i className="uil-trash-alt del-btn" onClick={() => deleteEmp(row.id)}></i>
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

export default ApprovalLog;