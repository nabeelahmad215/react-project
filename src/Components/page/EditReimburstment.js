import '../css/inform.css';
import { useEffect, useState } from 'react';
import { PostCall } from './PostCall';
import Swal from 'sweetalert';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PayrollLayout from './PayrollLayout';

const EditReimburstment = () => {

    const [edituser, setEdituser] = useState({ name: '' });
    const navi = useNavigate();
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const edituserid = async () => {
            const reqdata = await fetch(`http://localhost:8000/api/reimbursedit/${id}`);
            const res = await reqdata.json();
            setEdituser(await res);
        }
        edituserid();
    }, []);

    const handleEdit = (e) => {
        setEdituser({ ...edituser, [e.target.name]: e.target.value });
    }

    function handleUpdate(e) {

        PostCall(`reimbursupdate/${id}`, edituser, function (result) {
            Swal({
                icon: 'success',
                title: 'Update!',
                text: 'Data Has Been Update.',
                showConfirmButton: true
            })
            navi("/reimburstment-history")
        });

        e.preventDefault();

    }

    const [email, setEmail] = useState([]);
    useEffect(() => {
        const getemail = async () => {
            const resemail = await fetch("http://localhost:8000/api/empdropdown");
            const resem = await resemail.json();
            setEmail(await resem);
        }
        getemail();
    }, []);

    return (
        <>
            <div>
                <PayrollLayout />
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
                                <table className='mytable'>
                                    <tr>
                                        <td><label>Doc Date</label></td>
                                        <td><label>Employee Name</label></td>
                                        <td><label>Category</label></td>
                                        <td><label>Amount</label></td>

                                    </tr>
                                    <tr>
                                        <td><input type="date" name='doc_date' className='mytdinput' value={edituser.doc_date} onChange={(e) => handleEdit(e)} /></td>
                                        <td>
                                            <select className='mytdinput' name='emp_id' value={edituser.emp_code} >
                                                {
                                                    email.map((getemail, index) => (
                                                        <option key={index} value={getemail.emp_code}>[{getemail.emp_code}] ~ {getemail.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </td>
                                        <td>
                                            <select className='mytdinput' name='category' value={edituser.category} onChange={(e) => handleEdit(e)}>
                                                <option></option>
                                                <option>Travel Expense</option>
                                                <option>Medical Expense</option>
                                                <option>Office Expense</option>
                                            </select>
                                        </td>
                                        <td><input type="text" className='mytdinput' name='amount' value={edituser.amount} onChange={(e) => handleEdit(e)}/></td>

                                    </tr>
                                    <tr>
                                        <td><label>Detail</label></td>
                                    </tr>
                                    <tr>
                                        <td colSpan='4'><textarea type="detail" rows="4" cols="148" className='textarea' name='detail' value={edituser.detail} onChange={(e) => handleEdit(e)}/></td>
                                    </tr>
                                </table>
                                <div className='btnposition'>
                                    <button type="submit" class="button button2">UPDATE</button>
                                    <Link to="/reimburstment-history"><button class="button button1">HISTORY</button></Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditReimburstment;