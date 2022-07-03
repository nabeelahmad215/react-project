import '../css/reimb.css';
import PayrollLayout from './PayrollLayout';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PostCall } from './PostCall';
import Swal from 'sweetalert';

const Reimburstment = () => {

  const [email, setEmail] = useState([]);
  useEffect(() => {
    const getemail = async () => {
      const resemail = await fetch("http://localhost:8000/api/empdropdown");
      const resem = await resemail.json();
      setEmail(await resem);
    }
    getemail();
  }, []);

  const [doc_date, setDoc_date] = useState("");
  const [emp_id, setEmp_id] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [detail, setDetail] = useState("");
  const [status] = useState("Pending");
  const nav = useNavigate();

  function handleSubmit(e) {
      PostCall('reimburstment', {
          doc_date: doc_date, emp_id: emp_id, category: category, amount: amount, detail: detail, status:status
      }, function (result) {
          Swal({
              icon: 'success',
              title: 'Added!',
              text: 'data has been Added.',
              showConfirmButton: true,
              timer: 3000
          })
          nav("/reimburstment-history")
      });
      e.preventDefault();
  }

  return (
    <>
      <div>
        <PayrollLayout />
        <div class="p-4">
          <div class="welcome">
            <div class="content rounded-3 p-2">
              <h1 class="fs-5">Payroll / Reimburstment</h1>
            </div>
          </div>
        </div>
        <div class="p-4">
          <div class="welcome">
            <div class="content rounded-3 p-2">
              <form onSubmit={handleSubmit}>
                <table className='mytable'>
                  <tr>
                    <td><label>Doc Date</label></td>
                    <td><label>Employee Name</label></td>
                    <td><label>Category</label></td>
                    <td><label>Amount</label></td>

                  </tr>
                  <tr>
                    <td><input type="date" name='doc_date' className='mytdinput' onChange={(e) => (setDoc_date(e.target.value))}/></td>
                    <td>
                      <select className='mytdinput' name='emp_id' onChange={(e) => (setEmp_id(e.target.value))}>
                        <option></option>
                        {
                          email.map((getemail, index) => (
                            <option key={index} value={getemail.id}>[{getemail.emp_code}] ~ {getemail.name}</option>
                          ))
                        }
                      </select>
                    </td>
                    <td>
                      <select className='mytdinput' name='category' value={category} onChange={(e) => (setCategory(e.target.value))}>
                        <option></option>
                        <option>Travel Expense</option>
                        <option>Medical Expense</option>
                        <option>Office Expense</option>
                      </select>
                    </td>
                    <td><input type="text" className='mytdinput' name='amount' onChange={(e) => (setAmount(e.target.value))}/></td>

                  </tr>
                  <tr>
                    <td><label>Detail</label></td>
                  </tr>
                  <tr>
                    <td colSpan='4'><textarea type="detail" rows="4" cols="148" className='textarea' name='detail' onChange={(e) => (setDetail(e.target.value))}/></td>
                  </tr>
                </table>
                <div className='btnposition'>
                  <button type="submit" class="button button2">SAVE</button>
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

export default Reimburstment;