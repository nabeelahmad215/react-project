import '../css/dashboard.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg';

const PayrollLayout = () => {
    return (
        <>
            <div>
                <nav class="navbar navbar-expand-md">
                    <div class="container-fluid mx-2">
                        <div class="navbar-header">
                            <ul class="navbar-nav">
                                <li style={{ width: 190 }}>
                                    <a class="nav-link" href="#" role="button" aria-expanded="false">
                                        <img src={logo} alt='logo' style={{ width: 150 }} />
                                    </a>
                                </li>
                                <li>
                                    <Link to="/salary-sheet" class="nav-link" role="button" aria-expanded="false">
                                        Salary Sheet
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/payroll" class="nav-link" role="button" aria-expanded="false">
                                        Payroll
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/reimburstment" class="nav-link" role="button" aria-expanded="false">
                                        Reimburstment
                                    </Link>
                                </li>
                            </ul>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggle-navbar" aria-controls="toggle-navbar" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="uil-bars text-white"></i>
                            </button>
                        </div>
                        <div>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <i data-show="show-side-navigation1" class="uil-bars show-side-btn"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <div class="myfooter">
                    <button class="button button2">SAVE</button>
                    <button class="button button1">HISTORY</button>
                </div>
            </div>
        </>
    )
}

export default PayrollLayout;