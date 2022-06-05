import React from 'react';

const App = () => {


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
                  <img
                    class="rounded-pill img-fluid"
                    width="65"
                    src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907008/medium/1501685726/enhance"
                    alt="" />
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">My account</a>
                    </li>
                    <li><a class="dropdown-item" href="#">My inbox</a>
                    </li>
                    <li><a class="dropdown-item" href="#">Help</a>
                    </li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Log out</a></li>
                  </ul>
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
            <div class="content rounded-3 p-3">
              <h1 class="fs-3">Welcome to Dashboard</h1>
              <p class="mb-0">Hello Jone Doe, welcome to your awesome dashboard!</p>
            </div>
          </div>
        </div>
        <section class="admins p-4">
          <div class="row">
            <div class="col-md-12">
              <div class="box">
                <div class="admin d-flex align-items-center rounded-2 p-3 mb-4">
                  <section class="statis col-md-12 text-center">
                    <div class="row">
                      <div class="col-md-6 col-lg-4 mb-4 mb-lg-8">
                        <div class="box bg-primary p-3">
                          <i class="uil-newspaper"></i>
                          <a href="#"><h3>Recruitment</h3></a>
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-4 mb-4 mb-lg-8">
                        <div class="box bg-secondary p-3">
                          <i class="uil-user"></i>
                          <a href="#"><h3>Employee Information</h3></a>
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-4 mb-4 mb-md-8">
                        <div class="box bg-success p-3">
                          <i class="uil-location-arrow"></i>
                          <a href="#"><h3>Leaves</h3></a>
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
                        <div class="box bg-warning p-3">
                          <i class="uil-money-withdrawal"></i>
                          <a href="#"><h3>Payroll</h3></a>
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
                        <div class="box bg-info p-3">
                          <i class="uil-lock"></i>
                          <a href="#"><h3>Security</h3></a>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default App;