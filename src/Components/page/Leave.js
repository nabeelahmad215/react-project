import '../css/reimb.css';
import LeaveLayout from './LeaveLayout';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PostCall } from './PostCall';
import Swal from 'sweetalert';

const Leave = () => {
  const [email, setEmail] = useState([]);
  useEffect(() => {
    const getemail = async () => {
      const resemail = await fetch("http://localhost:8000/api/empdropdown");
      const resem = await resemail.json();
      setEmail(await resem);
    }
    getemail();
  }, []);

  const [emp_id, setEmp_id] = useState("");
  const [from_date, setFrom_date] = useState("");
  const [to_date, setTo_date] = useState("");
  const [type, setType] = useState("");
  const [reason, setReason] = useState("");
  const [status] = useState("");
  const nav = useNavigate();

  function handleSubmit(e) {
    PostCall('leave', {
      emp_id:emp_id, from_date:from_date, to_date:to_date, type:type, reason:reason, status: status
    }, function (result) {
      Swal({
        icon: 'success',
        title: 'Added!',
        text: 'data has been Added.',
        showConfirmButton: true,
        timer: 2000
      })
      nav("/leave-dashboard")
    });
    e.preventDefault();
  }

  return (
    <>
      <div>
        <LeaveLayout />
        <div class="p-4">
          <div class="welcome">
            <div class="content rounded-3 p-2">
              <h1 class="fs-5">Leave / Leave Request</h1>
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
                    <td><label>From Date</label></td>
                    <td><label>To Date</label></td>
                    <td><label>Leave Type</label></td>

                  </tr>
                  <tr>
                    <td><select className='mytdinput' name='emp_id' onChange={(e)=>(setEmp_id(e.target.value))}>
                      <option></option>
                      {
                        email.map((getemail, index) => (
                          <option key={index} value={getemail.id}>[{getemail.emp_code}] ~ {getemail.name}</option>
                        ))
                      }
                    </select></td>
                    <td><input type="date" name='from_date' className='mytdinput' onChange={(e)=>(setFrom_date(e.target.value))} /></td>
                    <td><input type="date" name='to_date' className='mytdinput' onChange={(e)=>(setTo_date(e.target.value))} /></td>
                    <td>
                      <select className='mytdinput' value={type} onChange={(e)=>(setType(e.target.value))}>
                        <option></option>
                        <option>Casual</option>
                        <option>Sick</option>
                        <option>Parental</option>
                        <option>Annual</option>
                      </select>
                    </td>

                  </tr>
                  <tr>
                    <td><label>Reason</label></td>
                  </tr>
                  <tr>
                    <td colSpan='4'><textarea type="detail" onChange={(e)=>(setReason(e.target.value))} rows="4" cols="148" className='textarea' /></td>
                  </tr>
                </table>
                <div className='btnposition'>
                  <button type="submit" class="button button2">SAVE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Leave;