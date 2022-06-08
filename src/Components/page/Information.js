import '../css/inform.css';

const Information = () => {
    return (
        <>
            <div>
                <nav class="navbar navbar-expand-md">
                    <div class="container-fluid mx-2">
                        <div class="navbar-header">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggle-navbar" aria-controls="toggle-navbar" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="uil-bars text-white"></i>
                            </button>
                            <a class="navbar-brand" href="#">admin<span class="main-color">kit</span></a>
                        </div>
                        <div class="collapse navbar-collapse" id="toggle-navbar">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Settings
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <i data-show="show-side-navigation1" class="uil-bars show-side-btn"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
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
                            <form>
                                <u><h3>Personal Information</h3></u>
                                <table className='mytableinfo'>
                                    <tr>
                                        <td><label>Employee Code</label></td>
                                        <td><label>Full Name</label></td>
                                        <td><label>Father/Husband Name</label></td>
                                        <td><label>Gender</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" className='mytdinputinfo' /></td>
                                        <td><input type="text" className='mytdinputinfo' /></td>
                                        <td><input type="text" className='mytdinputinfo' /></td>
                                        <td>
                                            <select className='mytdinputinfo'>
                                                <option>Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>D.O.B</label></td>
                                        <td><label>Religion</label></td>
                                        <td><label>Marital Status</label></td>
                                        <td><label>CNIC (without dashes)</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="date" className='mytdinputinfo' /></td>
                                        <td>
                                            <select className='mytdinputinfo'>
                                                <option>Religion</option>
                                                <option>Islam</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className='mytdinputinfo'>
                                                <option>Marital Status</option>
                                                <option>Married</option>
                                                <option>Non-Married</option>
                                            </select>
                                        </td>
                                        <td><input type="text" className='mytdinputinfo' /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Contact Number</label></td>
                                        <td><label>Address</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" className='mytdinputinfo' /></td>
                                        <td colSpan='3'><input type="text" className='mytdinputinfo' /></td>
                                    </tr>
                                </table>
                                <u><h3 style={{ marginTop: 15 }}>Education</h3></u>
                                <table className='mytableinfo'>
                                    <tr>
                                        <td><label>Qualification</label></td>
                                        <td><label>Degree Title</label></td>
                                        <td><label>Institution</label></td>
                                        <td><label>Completion Date</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" className='mytdinputinfo' /></td>
                                        <td><input type="text" className='mytdinputinfo' /></td>
                                        <td><input type="text" className='mytdinputinfo' /></td>
                                        <td><input type="date" className='mytdinputinfo' /> </td>
                                    </tr>
                                </table>
                                <u><h3 style={{ marginTop: 15 }}>Payroll</h3></u>
                                <table className='mytableinfo'>
                                    <tr>
                                        <td><label>Basic Salary</label></td>
                                        <td><label>Tax Percentage</label></td>
                                        <td><label>Gross Salary</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" className='mytdinputinfo' /></td>
                                        <td><input type="number" className='mytdinputinfo' /></td>
                                        <td><input type="text" className='mytdinputinfo' /></td>
                                    </tr>
                                </table>
                                <u><h3 style={{ marginTop: 15 }}>Joining</h3></u>
                                <table className='mytableinfo'>
                                    <tr>
                                        <td><label>Joining Date</label></td>
                                        <td><label>Employee Type</label></td>
                                        <td><label>Designation</label></td>
                                        <td><label>Department</label></td>
                                        <td><label>Status</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="date" className='mytdinputinfo' /></td>
                                        <td>
                                            <select className='mytdinputinfo'>
                                                <option>Type</option>
                                                <option>Permanent</option>
                                                <option>Internee</option>
                                            </select>
                                        </td>
                                        <td><input type="text" className='mytdinputinfo' /></td>
                                        <td>
                                            <select className='mytdinputinfo'>
                                                <option>Department</option>
                                                <option>IT</option>
                                                <option>Admin</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className='mytdinputinfo'>
                                                <option>Status</option>
                                                <option>Active</option>
                                                <option>Inactive</option>
                                            </select>
                                        </td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="myfooter">
                <button class="button button2">SAVE</button>
                <button class="button button1">HISTORY</button>
            </div>
        </>
    )
}
export default Information;