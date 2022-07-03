import '../css/dashboard.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg';

const Dashboard = () => {
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
                            </ul>
                        </div>
                        <div>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <i data-show="show-side-navigation1" class="uil-sign-out-alt show-side-btn"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

        <div class="p-4">
          <div class="welcome">
            <div class="content rounded-3 p-2">
              <h1 class="fs-3">Welcome to Dashboard</h1>
              <p class="mb-0">Hello Jone Doe, welcome to your awesome dashboard!</p>
            </div>
          </div>

          <section class="statistics mt-4">
            <div class="row">
              <div class="col-lg-4">
                <a href="#" class="linkstyle">
                  <div class="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                    <i class="uil-newspaper fs-2 text-center bg-primary rounded-circle"></i>
                    <div class="ms-3">
                      <div class="d-flex align-items-center">
                        <h3 class="mb-0">Recruitment</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-4">
                <Link to="/employee-dashboard" target="_blank" class="linkstyle">
                  <div class="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                    <i class="uil-user fs-2 text-center bg-primary rounded-circle"></i>
                    <div class="ms-3">
                      <div class="d-flex align-items-center">
                        <h3 class="mb-0">Employee Information</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col-lg-4">
                <Link to="/leave-dashboard" target="_blank" class="linkstyle">
                  <div class="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                    <i class="uil-location-arrow fs-2 text-center bg-primary rounded-circle"></i>
                    <div class="ms-3">
                      <div class="d-flex align-items-center">
                        <h3 class="mb-0">Leaves</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <section class="statistics mt-4">
            <div class="row">
              <div class="col-lg-4">
                <Link to="/payroll-dashboard" target="_blank" class="linkstyle">
                  <div class="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                    <i class="uil-money-withdrawal fs-2 text-center bg-primary rounded-circle"></i>
                    <div class="ms-3">
                      <div class="d-flex align-items-center">
                        <h3 class="mb-0">Payroll</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col-lg-4">
                <Link to="/user-list" class="linkstyle" target="_blank">
                  <div class="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                    <i class="uil-lock fs-2 text-center bg-primary rounded-circle"></i>
                    <div class="ms-3">
                      <div class="d-flex align-items-center">
                        <h3 class="mb-0">Security</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
