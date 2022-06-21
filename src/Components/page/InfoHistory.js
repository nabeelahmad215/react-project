import '../css/dashboard.css';
import EmployeeLayout from './EmployeeLayout';
import { useState, useEffect } from 'react';
import '../css/table.css';

const InfoHistory = () => {
    const [email, setEmail] = useState([]);
    useEffect(() => {
        const getemail = async () => {
            const resemail = await fetch("http://localhost:8000/api/empinfohistory");
            const resem = await resemail.json();
            setEmail(await resem);
        }
        getemail();
    }, []);

    return (
        <>
            <div>
                <EmployeeLayout />
                <div class="p-4">
                    <div class="welcome">
                        <div class="content rounded-3 p-2">
                            <h1 class="fs-5">Employee / Employee Information History</h1>
                        </div>
                    </div>
                </div>
                <div class="p-4 mybox">
                    <div class="welcome">
                        <div class="content rounded-3 p-2">
                            <table className="table table-striped">
                                <thead>
                                    <tr className='mytr'>
                                        <th>Emp Code</th>
                                        <th>Employee Name</th>
                                        <th>Father/Husband</th>
                                        <th>Gender</th>
                                        <th>DOB</th>
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
                                                        <td>{row.fname}</td>
                                                        <td>{row.gender}</td>
                                                        <td>{row.dob}</td>
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

export default InfoHistory;