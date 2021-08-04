import React from 'react';
import userImg from '../../../images/user.jpg';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <aside className="left-sidebar" data-sidebarbg="skin6">
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li>
                            <div className="user-profile d-flex no-block dropdown m-t-20">
                                <div className="user-pic"><img src={userImg} alt="users"
                                    className="rounded-circle" width="40" /></div>
                                <div className="user-content hide-menu m-l-10">
                                    <a href="#" className="" id="Userdd" role="button"
                                        data-bs-toggle="drpdown" aria-haspopup="true" aria-expanded="false">
                                        <h5 className="ml-3 mt-2 user-name font-medium">Chibuzo Okolo </h5>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link"
                            href="index.html" aria-expanded="false"><i className="mdi mdi-view-dashboard"></i><span
                                className="hide-menu">Dashboard</span></a></li>
                        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link"
                            href="pages-profile.html" aria-expanded="false"><i
                                className="mdi mdi-account-network"></i><span className="hide-menu">Profile</span></a></li>
                        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link"
                            href="/user/courses" aria-expanded="false"><i className="mdi mdi-border-all"></i><span
                                className="hide-menu">Elearning</span></a></li>
                        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link"
                            href="icon-material.html" aria-expanded="false"><i className="mdi mdi-cart"></i><span
                                className="hide-menu">Ecommerce</span></a></li>
                        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link"
                            href="starter-kit.html" aria-expanded="false"><i className="mdi mdi-heart"></i><span
                                className="hide-menu">Dating</span></a></li>
                        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link"
                            href="error-404.html" aria-expanded="false"><i className="mdi mdi-briefcase"></i><span
                                className="hide-menu">Jobs</span></a></li>
                    </ul>

                </nav>
            </div>
        </aside>
    );
}

export default SideMenu;