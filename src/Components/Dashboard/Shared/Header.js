import React from 'react';
import userImg from '../../../images/user.jpg';
import logoEmblem from '../../../images/logo-icon.png';
import logoEmblem2 from '../../../images/logo-light-icon.png';
import logoText from '../../../images/logo-text.png';
import logoText2 from '../../../images/logo-light-text.png';

const Header = () => {
    return (
        <header className="topbar">
            <nav className="navbar top-navbar navbar-expand-md">
                <div className="navbar-header">
                    <a className="navbar-brand" href="index">
                        <b className="logo-icon">
                            <img src={logoEmblem} alt="homepage" className="dark-logo" />
                            <img src={logoEmblem2} alt="homepage" className="light-logo" />
                        </b>
                        <span className="logo-text">
                            <img src={logoText} alt="homepage" className="dark-logo" />
                            <img src={logoText2} className="light-logo" alt="homepage" />
                        </span>
                    </a>
                    <a className="nav-toggler waves-effect waves-light d-block d-mdnone" href="#"><i
                        className="mdi mdi-menu ti-close"></i></a>
                </div>
                <div className="float-right d-none" id="">
                    <input type="text" className="form-control float-right" placeholder='Search' /><i classame="fa fa-dashboard"></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;