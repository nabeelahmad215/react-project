import '../css/reimb.css';
import PayrollLayout from './PayrollLayout';

const Salary = () => {
  return (
    <>
      <div>
        <PayrollLayout />
        <div class="p-4">
          <div class="welcome">
            <div class="content rounded-3 p-2">
              <h1 class="fs-5">Payroll / Salary Sheet</h1>
            </div>
          </div>
        </div>
        <div class="p-4">
          <div class="welcome">
            <div class="content rounded-3 p-2">
              <form>
              <table className='mytable'>
                <tr>
                  <td><label>Doc Date</label></td>
                  <td><label>Employee Name</label></td>
                  <td><label>Category</label></td>
                  <td><label>Amount</label></td>

                </tr>
                <tr>
                  <td><input type="text" className='mytdinput' /></td>
                  <td><input type="text" className='mytdinput' /></td>
                  <td><input type="text" className='mytdinput' /></td>
                  <td><input type="text" className='mytdinput' /></td>

                </tr>
                <tr>
                  <td><label>Detail</label></td>
                </tr>
                <tr>
                    <td colSpan='4'><textarea type="detail" rows="4" cols="148" className='textarea' id="print-section" /></td>
                  </tr>
                </table>
                <div>
                <button onClick={() => window.print()}>PRINT</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Salary;