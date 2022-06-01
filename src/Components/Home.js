import React from 'react';
import './Main.css';
import { Arrow, Sidebar } from './Common';
import { Link } from 'react-router-dom';

const Home =() =>{
    return (
        <>
            <div class="sidebar close">
                <div class="logo-details">
                    <i class='bx bxl-redbubble'></i>
                    <span class="logo_name">Retrobuzz</span>
                </div>
                <ul class="nav-links">
                    <li>
                        <Link to="/dashboard">
                            <i class='bx bx-grid-alt'></i>
                            <span class="link_name">Dashboard</span>
                        </Link>
                        <ul class="sub-menu blank">
                            <li><Link class="link_name" to="/dashboard">Dashboard</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div class="iocn-link">
                            <a href="#">
                                <i class='bx bx-user-pin me-icon'></i>
                                <span class="link_name">Recruitment</span>
                            </a>
                            <i class='bx bxs-chevron-down arrow' onClick={Arrow}></i>
                        </div>
                        <ul class="sub-menu">
                            <li><a class="link_name" href="#">Recruitment</a></li>
                            <li><a href="#">Job Request</a></li>
                            <li><a href="#">Candidates</a></li>
                            <li><a href="#">Job Interview</a></li>
                            <li><a href="#">Interview Feedback</a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="iocn-link">
                            <a href="#">
                                <i class='bx bx-user me-icon'></i>
                                <span class="link_name">Employee</span>
                            </a>
                            <i class='bx bxs-chevron-down arrow' onClick={Arrow}></i>
                        </div>
                        <ul class="sub-menu">
                            <li><a class="link_name" href="#">Employee</a></li>
                            <li><a href="#">Employee Information</a></li>
                            <li><a href="#">Complaint</a></li>
                            <li><a href="#">Promotion</a></li>
                            <li><a href="#">Warning</a></li>
                            <li><a href="#">Resignation</a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="iocn-link">
                            <a href="#">
                                <i class='bx bx-calendar-alt me-icon' ></i>
                                <span class="link_name">Leaves</span>
                            </a>
                            <i class='bx bxs-chevron-down arrow' onClick={Arrow}></i>
                        </div>
                        <ul class="sub-menu">
                            <li><a class="link_name" href="#">Leaves</a></li>
                            <li><a href="#">Request</a></li>
                            <li><a href="#">History</a></li>
                            <li><a href="#">Type</a></li>
                            <li><a href="#">Adjustment</a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="iocn-link">
                            <a href="#">
                                <i class='bx bx-wallet-alt me-icon'></i>
                                <span class="link_name">Payroll</span>
                            </a>
                            <i class='bx bxs-chevron-down arrow' onClick={Arrow}></i>
                        </div>
                        <ul class="sub-menu">
                            <li><a class="link_name" href="#">Payroll</a></li>
                            <li><a href="#">Salary Sheet</a></li>
                            <li><a href="#">Payslip</a></li>
                            <li><a href="#">Reimbursement</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-cog me-icon'></i>
                            <span class="link_name">Admin Panel</span>
                        </a>
                        <ul class="sub-menu blank">
                            <li><a class="link_name" href="#">Admin Panel</a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="profile-details">
                            <div class="profile-content">
                                <img src="" alt="IMG" />
                            </div>
                            <div class="name-job">
                                <div class="profile_name">Username</div>
                                <div class="job">Profession</div>
                            </div>
                            <i class='bx bx-log-out'></i>
                        </div>
                    </li>
                </ul>
            </div>
            <section class="home-section">
                <div class="home-content">
                    <i class='bx bx-menu' onClick={Sidebar}></i>
                    <span class="text">WELCOME | Username</span>
                </div>
            </section>
        </>


    );
    
}

export default Home;