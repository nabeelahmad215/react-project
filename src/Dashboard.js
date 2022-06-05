import React from 'react';
import useScript from 'hooks/useScript';

const Dashboard = props => {
  useScript('./Components/dashboard.js');

  return (
    <>
      <div>
        <aside class="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left" id="show-side-navigation1">
          <i class="uil-bars close-aside d-md-none d-lg-none" data-close="show-side-navigation1"></i>
          <div class="sidebar-header d-flex justify-content-center align-items-center px-3 py-4">
            <img
              class="rounded-pill img-fluid"
              width="65"
              src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907008/medium/1501685726/enhance"
              alt="" />
            <div class="ms-2">
              <h5 class="fs-6 mb-0">
                <a class="text-decoration-none" href="#">Jone Doe</a>
              </h5>
              <p class="mt-1 mb-0">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>

          <div class="search position-relative text-center px-4 py-3 mt-2">
            <input type="text" class="form-control w-100 border-0 bg-transparent" placeholder="Search here" />
            <i class="fa fa-search position-absolute d-block fs-6"></i>
          </div>

          <ul class="categories list-unstyled">
            <li class="has-dropdown">
              <i class="uil-estate fa-fw"></i><a href="#"> Dashboard</a>
              <ul class="sidebar-dropdown list-unstyled">
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">ipsum dolor</a></li>
                <li><a href="#">dolor ipsum</a></li>
                <li><a href="#">amet consectetur</a></li>
                <li><a href="#">ipsum dolor sit</a></li>
              </ul>
            </li>
            <li class="">
              <i class="uil-folder"></i><a href="#"> File manager</a>
            </li>
            <li class="has-dropdown">
              <i class="uil-calendar-alt"></i><a href="#"> Calender</a>
              <ul class="sidebar-dropdown list-unstyled">
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">ipsum dolor</a></li>
                <li><a href="#">dolor ipsum</a></li>
                <li><a href="#">amet consectetur</a></li>
                <li><a href="#">ipsum dolor sit</a></li>
              </ul>
            </li>
            <li class="has-dropdown">
              <i class="uil-envelope-download fa-fw"></i><a href="#"> Mailbox</a>
              <ul class="sidebar-dropdown list-unstyled">
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">ipsum dolor</a></li>
                <li><a href="#">dolor ipsum</a></li>
                <li><a href="#">amet consectetur</a></li>
                <li><a href="#">ipsum dolor sit</a></li>
              </ul>
            </li>
            <li class="has-dropdown">
              <i class="uil-shopping-cart-alt"></i><a href="#"> Ecommerce</a>
              <ul class="sidebar-dropdown list-unstyled">
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">ipsum dolor</a></li>
                <li><a href="#">dolor ipsum</a></li>
                <li><a href="#">amet consectetur</a></li>
                <li><a href="#">ipsum dolor sit</a></li>
              </ul>
            </li>
            <li class="has-dropdown">
              <i class="uil-bag"></i><a href="#"> Projects</a>
              <ul class="sidebar-dropdown list-unstyled">
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">ipsum dolor</a></li>
                <li><a href="#">dolor ipsum</a></li>
                <li><a href="#">amet consectetur</a></li>
                <li><a href="#">ipsum dolor sit</a></li>
              </ul>
            </li>
            <li class="">
              <i class="uil-setting"></i><a href="#"> Settings</a>
              <ul class="sidebar-dropdown list-unstyled">
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">ipsum dolor</a></li>
                <li><a href="#">dolor ipsum</a></li>
                <li><a href="#">amet consectetur</a></li>
                <li><a href="#">ipsum dolor sit</a></li>
              </ul>
            </li>
            <li class="has-dropdown">
              <i class="uil-chart-pie-alt"></i><a href="#"> Components</a>
              <ul class="sidebar-dropdown list-unstyled">
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">ipsum dolor</a></li>
                <li><a href="#">dolor ipsum</a></li>
                <li><a href="#">amet consectetur</a></li>
                <li><a href="#">ipsum dolor sit</a></li>
              </ul>
            </li>
            <li class="has-dropdown">
              <i class="uil-panel-add"></i><a href="#"> Charts</a>
              <ul class="sidebar-dropdown list-unstyled">
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">ipsum dolor</a></li>
                <li><a href="#">dolor ipsum</a></li>
                <li><a href="#">amet consectetur</a></li>
                <li><a href="#">ipsum dolor sit</a></li>
              </ul>
            </li>
            <li class="">
              <i class="uil-map-marker"></i><a href="#"> Maps</a>
            </li>
          </ul>
        </aside>

        <section id="wrapper">
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
                <div class="col-md-6">
                  <div class="box">
                    <div class="admin d-flex align-items-center rounded-2 p-3 mb-4">
                      <div class="img">
                        <img class="img-fluid rounded-pill"
                          width="75" height="75"
                          src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148906966/small/1501685402/enhance"
                          alt="admin" />
                      </div>
                      <div class="ms-3">
                        <h3 class="fs-5 mb-1">Joge Lucky</h3>
                        <p class="mb-0">Lorem ipsum dolor sit amet consectetur elit.</p>
                      </div>
                    </div>
                    <div class="admin d-flex align-items-center rounded-2 p-3 mb-4">
                      <div class="img">
                        <img class="img-fluid rounded-pill"
                          width="75" height="75"
                          src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907137/small/1501685404/enhance"
                          alt="admin" />
                      </div>
                      <div class="ms-3">
                        <h3 class="fs-5 mb-1">Joge Lucky</h3>
                        <p class="mb-0">Lorem ipsum dolor sit amet consectetur elit.</p>
                      </div>
                    </div>
                    <div class="admin d-flex align-items-center rounded-2 p-3">
                      <div class="img">
                        <img class="img-fluid rounded-pill"
                          width="75" height="75"
                          src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907019/small/1501685403/enhance"
                          alt="admin" />
                      </div>
                      <div class="ms-3">
                        <h3 class="fs-5 mb-1">Joge Lucky</h3>
                        <p class="mb-0">Lorem ipsum dolor sit amet consectetur elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="box">
                    <div class="admin d-flex align-items-center rounded-2 p-3 mb-4">
                      <div class="img">
                        <img class="img-fluid rounded-pill"
                          width="75" height="75"
                          src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907114/small/1501685404/enhance"
                          alt="admin" />
                      </div>
                      <div class="ms-3">
                        <h3 class="fs-5 mb-1">Joge Lucky</h3>
                        <p class="mb-0">Lorem ipsum dolor sit amet consectetur elit.</p>
                      </div>
                    </div>
                    <div class="admin d-flex align-items-center rounded-2 p-3 mb-4">
                      <div class="img">
                        <img class="img-fluid rounded-pill"
                          width="75" height="75"
                          src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907086/small/1501685404/enhance"
                          alt="admin" />
                      </div>
                      <div class="ms-3">
                        <h3 class="fs-5 mb-1">Joge Lucky</h3>
                        <p class="mb-0">Lorem ipsum dolor sit amet consectetur elit.</p>
                      </div>
                    </div>
                    <div class="admin d-flex align-items-center rounded-2 p-3">
                      <div class="img">
                        <img class="img-fluid rounded-pill"
                          width="75" height="75"
                          src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907008/medium/1501685726/enhance"
                          alt="admin" />
                      </div>
                      <div class="ms-3">
                        <h3 class="fs-5 mb-1">Joge Lucky</h3>
                        <p class="mb-0">Lorem ipsum dolor sit amet consectetur elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </section>

      </div>
      <ScriptHTMLAttributes></ScriptHTMLAttributes>
    </>
  );
}

export default Dashboard;