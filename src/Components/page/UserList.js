import '../css/inform.css';
import EmployeeLayout from './EmployeeLayout';

const UserList = () => {
    return (
        <>
            <div>
                <EmployeeLayout />
                <div class="p-4">
                    <div class="welcome">
                        <div class="content rounded-3 p-2">
                            <h1 class="fs-5">Employee / Users List</h1>
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <div class="welcome">
                        <div class="content rounded-3 p-2">
                            <table className='mytable'>
                                <tr>
                                    <td><label>Employee Code</label></td>
                                    <td><label>Employee Name</label></td>
                                    <td><label>Email</label></td>
                                    <td><label>Password</label></td>
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
                                    <td><input type="email" className='mytdinput' /></td>
                                    <td><input type="text" className='mytdinput' /></td>
                                </tr>
                                <tr>
                                    <td><label>User Type</label></td>
                                </tr>
                                <tr>
                                    <td>
                                        <select className='mytdinput'>
                                            <option>Select User Type</option>
                                            <option>Admin</option>
                                            <option>Standard User</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserList;