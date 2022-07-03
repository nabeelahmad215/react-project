import '../css/dashboard.css';
import EmployeeLayout from './EmployeeLayout';
import { useState, useEffect } from 'react';
import '../css/table.css';
import Swal from 'sweetalert';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PostCall } from './PostCall';

const PromotionHistory = () => {
    const [email, setEmail] = useState([]);
    useEffect(() => {
        const getemail = async () => {
            const resemail = await fetch("http://localhost:8000/api/promotion-history");
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
                            <h1 class="fs-5">Employee / Employee Promotion History</h1>
                        </div>
                    </div>
                </div>
                <div class="p-4 mybox">
                    <div class="welcome">
                        <div class="content rounded-3 p-2">
                            <table className="table table-striped">
                                <thead>
                                    <tr className='mytr'>
                                        <th>Employee Code</th>
                                        <th>Employee Name</th>
                                        <th>Promotion Date</th>
                                        <th>Promoted From</th>
                                        <th>Promoted To</th>
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
                                                        <td>{row.promotion_date}</td>
                                                        <td>{row.promoted_to}</td>
                                                        <td>{row.promoted_from}</td>
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

export default PromotionHistory;