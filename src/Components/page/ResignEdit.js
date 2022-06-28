import '../css/inform.css';
import { useEffect, useState } from 'react';
import { PostCall } from './PostCall';
import EmployeeLayout from './EmployeeLayout';
import Swal from 'sweetalert';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ResignEdit = () => {

    const [edituser, setEdituser] = useState({ name: '' });
    const navi = useNavigate();
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const edituserid = async () => {
            const reqdata = await fetch(`http://localhost:8000/api/edit-resign/${id}`);
            const res = await reqdata.json();
            setEdituser(await res);
        }
        edituserid();
    }, []);

    const handleEdit = (e) => {
        setEdituser({ ...edituser, [e.target.name]: e.target.value });
    }

    function handleUpdate(e) {

        PostCall(`resignupdate/${id}`, edituser, function (result) {
            Swal({
                icon: 'success',
                title: 'Update!',
                text: 'Data Has Been Update.',
                showConfirmButton: true
            })
            navi("/resignation-history")
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
                            <form onSubmit={handleUpdate}>
                                <table className='mytable'>
                                    <tr>
                                        <td><label>Doc Date</label></td>
                                        <td><label>Resignation Date</label></td>
                                        <td><label>Notice Date</label></td>
                                        <td><label>Employee Code</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="date" name='doc_date' value={edituser.doc_date} onChange={handleEdit} className='mytdinput' /></td>
                                        <td><input type="date" name='resignation_date' value={edituser.resignation_date} onChange={handleEdit} className='mytdinput' /></td>
                                        <td><input type="date" name='notice_date' value={edituser.notice_date} onChange={handleEdit} className='mytdinput' /></td>
                                        <td>
                                            <select className='mytdinput' name='emp_code' value={edituser.emp_code} onChange={handleEdit}>
                                                <option></option>
                                                {
                                                    email.map((getemail, index) => (
                                                        <option key={index} value={getemail.emp_code}>[{getemail.emp_code}] ~ {getemail.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan='2'><label>Resignation Detail</label></td>
                                        <td><label>Status</label></td>
                                    </tr>
                                    <tr>
                                        <td colSpan='2'><input type="text" name='detail' value={edituser.detail} onChange={handleEdit} className='mytdinput' /></td>
                                        <td>
                                            <select className='mytdinput' name='status' value={edituser.status} onChange={handleEdit}>
                                                <option></option>
                                                <option>Approved</option>
                                                <option>Disapproved</option>
                                            </select>
                                        </td>
                                    </tr>
                                </table>
                                <div className='btnposition'>
                                    <button type="submit" class="button button2">UPDATE</button>
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
export default ResignEdit;