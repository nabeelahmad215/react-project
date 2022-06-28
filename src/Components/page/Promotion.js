import '../css/inform.css';
import EmployeeLayout from './EmployeeLayout';

const Promotion = () => {
    return (
        <>
            <div>
                <EmployeeLayout />
                <div class="p-4">
                    <div class="welcome">
                        <div class="content rounded-3 p-2">
                            <h1 class="fs-5">Employee / Promotion</h1>
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <div class="welcome">
                        <div class="content rounded-3 p-2">
                            <table className='mytable'>
                                <tr>
                                    <td><label>Employee Name</label></td>
                                    <td><label>Promotion Date</label></td>
                                    <td><label>Promoted From</label></td>
                                    <td><label>Promoted To</label></td>
                                </tr>
                                <tr>
                                    <td><input type="text" className='mytdinput' /></td>
                                    <td><input type="date" className='mytdinput' /></td>
                                    <td><input type="text" className='mytdinput' /></td>
                                    <td><input type="text" className='mytdinput' /></td>
                                </tr>
                                <tr>
                                    <td><label>Current Basic Salary</label></td>
                                    <td><label>Promoted Basic Salary</label></td>
                                    <td><label>Salary Tax</label></td>
                                    <td><label>Gross Salary</label></td>
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
                                    <td colSpan='4'><textarea type="detail" rows="4" cols="148" className='textarea' /></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Promotion;