import '../css/dashboard.css';
import { useState, useEffect } from 'react';
import '../css/table.css';
import LeaveLayout from './LeaveLayout';
import { Link } from 'react-router-dom';

const ApprovalLogReject = () => {
    const [email, setEmail] = useState([]);
    useEffect(() => {
        const getemail = async () => {
            const resemail = await fetch("http://localhost:8000/api/reject");
            const resem = await resemail.json();
            setEmail(await resem);
        }
        getemail();
    }, []);

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
                                <Link to="/approval-log"><button className="button btn1">ALL</button></Link>
                                <Link to="/approval-log/pending"><button className="button btn2">PENDING</button></Link>
                                <Link to="/approval-log/approved"><button className="button btn3">APPROVED</button></Link>
                                <Link to="/approval-log/reject"><button className="button btn4" style={{backgroundColor: "red",color: "white"}}>REJECT</button></Link>
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
                                                        <td>{row.status}</td>
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

export default ApprovalLogReject;