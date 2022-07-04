import '../css/reimb.css';
import PayrollLayout from './PayrollLayout';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert';
import { PostCall } from './PostCall';

const Payroll = () => {

  const [email, setEmail] = useState([]);
  useEffect(() => {
    const getemail = async () => {
      const resemail = await fetch("http://localhost:8000/api/empdropdown");
      const resem = await resemail.json();
      setEmail(await resem);
    }
    getemail();
  }, []);

  const [allownce, setAllownce] = useState(0);
  const [reimburstment, setReimburstment] = useState(0);
  const [gross_salary, setGrosssalary] = useState(0);
  const [deduction, setDeduction] = useState(0);
  const [net_total, setNettotal] = useState(0);
  const [getid, setGetid] = useState('');
  const [detail, setDetail] = useState('');
  const [salary_month, setSalary_month] = useState('');
  const [getrowdata, setGetrowdata] = useState('');
  const [emp_id, setEmp_id] = useState('');

  // debugger;
  let salary = parseInt(getrowdata.grosssalary);
  let newval = parseInt(allownce) + parseInt(reimburstment);
  var tot = parseInt(salary) + parseInt(newval);
  function sum() {
    setNettotal(tot - deduction);
  }

  const handleEmpid = (e) => {
    const getid = e.target.value;
    setGetid(getid);
  }

  const handleEmpstate = (e) => {
    const newname = e.target.value;
    setEmp_id(newname);
  }

  function handleStateId(e) {
    handleEmpid(e);
    handleEmpstate(e);
  }

  useEffect(() => {
    const getrowdata = async () => {
      const reqRowdata = await fetch(`http://localhost:8000/api/empfetch/${getid}`);
      const resrowdata = await reqRowdata.json();
      setGetrowdata(await resrowdata);
    }
    getrowdata();
  }, [getid]);

  const nav = useNavigate();

  function handleSubmit(e) {
    PostCall('payroll', {
      salary_month: salary_month, emp_id: emp_id, salary: gross_salary, allownce: allownce, deduction: deduction,
      reimburstment: reimburstment, net_total: net_total, detail:detail
    }, function (result) {
      Swal({
        icon: 'success',
        title: 'Added!',
        text: 'data has been Added.',
        showConfirmButton: true,
        timer: 3000
      })
      nav("/reimburstment")
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
              <h1 class="fs-5">Payroll / Payroll</h1>
            </div>
          </div>
        </div>
        <div class="p-4">
          <div class="welcome">
            <div class="content rounded-3 p-2">
              <form onSubmit={handleSubmit}>
                <table className='mytable'>
                  <tr>
                    <td><label>Salary Month</label></td>
                    <td><label>Employee Name</label></td>
                    <td><label>Allownces</label></td>
                    <td><label>Reimburstment</label></td>

                  </tr>
                  <tr>
                    <td><input type="month" className='mytdinput' onChange={(e) => setSalary_month(e.target.value)} /></td>
                    <td>
                      <select className='mytdinput' name='emp_id' onChange={handleStateId}>
                        <option>---Select Any Value---</option>
                        {
                          email.map((getemail, index) => (
                            <option key={index} value={getemail.id}>[{getemail.emp_code}] ~ {getemail.name}</option>
                          ))
                        }
                      </select>
                    </td>
                    <td><input type="text" className='mytdinput' value={allownce} onChange={(e) => setAllownce(+e.target.value)} /></td>
                    <td><input type="text" className='mytdinput' value={reimburstment} onChange={(e) => setReimburstment(+e.target.value)} /></td>

                  </tr>
                  <tr>
                    <td><label>Gross Salary</label></td>
                    <td><label>Deductions</label></td>
                    <td><label>Net Total</label></td>
                  </tr>
                  <tr>
                    <td><input type="text" className='mytdinput' value={salary} onChange={(e) => setGrosssalary(+e.target.value)} /></td>
                    <td><input type="text" className='mytdinput' value={deduction} onChange={(e) => setDeduction(+e.target.value)} /><button type="button" onClick={sum} className="taxbtn"><i className="uil-focus-add del-btn"></i></button></td>
                    <td><input type="text" className='mytdinput' value={net_total} onChange={(e) => setNettotal(e.target.value)} /></td>
                  </tr>
                  <tr>
                    <td><label>Detail</label></td>
                  </tr>
                  <tr>
                    <td colSpan='4'><textarea type="detail" rows="4" cols="148" className='textarea' onChange={(e) => setDetail(e.target.value)} /></td>
                  </tr>
                </table>
                <div className='btnposition'>
                  <button type="submit" class="button button2">SAVE</button>
                  <Link to="/info-history"><button class="button button1">HISTORY</button></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payroll;