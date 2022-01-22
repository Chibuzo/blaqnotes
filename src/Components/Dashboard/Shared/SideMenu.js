import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = ({ logout }) => {
    return (
        <aside className="left-sidebar" data-sidebarbg="skin6">
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <Link to="/" className='logo'>
                        <h1>b</h1>
                        <h2>BlaqNotes</h2>
                    </Link>
                    <ul id="sidebarnav">
                        <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link"
                            to="/user" aria-expanded="false"><i className="mdi mdi-home"></i><span
                                className="hide-menu">Home</span></Link></li>
                        <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link"
                            to="/user/notes" aria-expanded="false"><i className="mdi mdi-file-multiple"></i><span
                                className="hide-menu">My Notes</span></Link></li>
                        <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link"
                            to="/user/profile" aria-expanded="false"><i
                                className="mdi mdi-account-network"></i><span className="hide-menu">Profile</span></Link></li>
                        <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link"
                            to="/user/courses" aria-expanded="false"><i className="mdi mdi-border-all"></i><span
                                className="hide-menu">Elearning</span></Link></li>
                        <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link"
                            to="/user/ecommerce" aria-expanded="false"><i className="mdi mdi-cart"></i><span
                                className="hide-menu">Ecommerce</span></Link></li>
                        <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link"
                            to="/user/dating" aria-expanded="false"><i className="mdi mdi-heart"></i><span
                                className="hide-menu">Dating</span></Link></li>
                        <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link"
                            to="/user/jobs" aria-expanded="false"><i className="mdi mdi-briefcase"></i><span
                                className="hide-menu">Jobs</span></Link></li>
                        <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link"
                            to="#" aria-expanded="false"><i className="mdi mdi-logout"></i><span
                                className="hide-menu" onClick={e => logout()}>Logout</span></Link></li>
                    </ul>

                </nav>
            </div>
        </aside>
    );
}

export default SideMenu;