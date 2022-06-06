import '../css/dashboard.css';

const Dashboard = () => {
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
                  <a class="nav-link" href="#"><i class="uil-comments-alt"></i><span>23</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><i class="uil-bell"></i><span>98</span></a>
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
                <a href="#" class="linkstyle">
                  <div class="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                    <i class="uil-user fs-2 text-center bg-primary rounded-circle"></i>
                    <div class="ms-3">
                      <div class="d-flex align-items-center">
                        <h3 class="mb-0">Employee Information</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-4">
                <a href="#" class="linkstyle">
                  <div class="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                    <i class="uil-location-arrow fs-2 text-center bg-primary rounded-circle"></i>
                    <div class="ms-3">
                      <div class="d-flex align-items-center">
                        <h3 class="mb-0">Leaves</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </section>

          <section class="statistics mt-4">
            <div class="row">
              <div class="col-lg-4">
                <a href="#" class="linkstyle">
                  <div class="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                    <i class="uil-money-withdrawal fs-2 text-center bg-primary rounded-circle"></i>
                    <div class="ms-3">
                      <div class="d-flex align-items-center">
                        <h3 class="mb-0">Payroll</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-4">
                <a href="#" class="linkstyle">
                  <div class="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                    <i class="uil-lock fs-2 text-center bg-primary rounded-circle"></i>
                    <div class="ms-3">
                      <div class="d-flex align-items-center">
                        <h3 class="mb-0">Security</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
