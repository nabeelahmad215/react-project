import '../css/inform.css';
import EmployeeLayout from './EmployeeLayout';

const Resignation = () => {
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
                            <table className='mytable'>
                                <tr>
                                    <td><label>Doc Date</label></td>
                                    <td><label>Employee Name</label></td>
                                    <td><label>Resignation Date</label></td>
                                    <td><label>Notice Date</label></td>
                                </tr>
                                <tr>
                                    <td><input type="date" className='mytdinput' /></td>
                                    <td>
                                        <select className='mytdinput'>
                                            <option>
                                                EmployeeName
                                            </option>
                                        </select>
                                    </td>
                                    <td><input type="date" className='mytdinput' /></td>
                                    <td><input type="date" className='mytdinput' /></td>
                                </tr>
                                <tr>
                                    <td><label>Resignation Detail</label></td>
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
export default Resignation;