import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import useUserAuth from "../../Hooks/useUserAuth";
import { UserContext } from "../../Context/UserContext";

const Sidebar = props => {
    const { logout } = useUserAuth();
    const userContext = useContext(UserContext);

    useEffect(() => {
        if (userContext[0].IsLoggedIn === false) {
            //props.history.push("/");
        }
    }, [userContext[0].IsLoggedIn]);

    const logoutUser = () => {
        logout();
        try {
            props.history.push("/login");
        } catch (err) {

        }
    }

    return (
        <aside>
            <div id="sidebar" className="nav-collapse">
                <div className="leftside-navigation">
                    <ul className="sidebar-menu" id="nav-accordion">
                        {props.children}

                        <li className="sub-menu">
                            <Link to="/mail">
                                <i className="fa fa-envelope fa-fw" />
                                <span>Messages </span>
                            </Link>
                            <ul className="sub">
                                <li>
                                    <Link to="/message/inbox">Inbox</Link>
                                </li>
                                <li>
                                    <Link to="/message/compose/">Compose Mail</Link>
                                </li>
                                <li>
                                    <Link to="/message/sent">Sent</Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/" onClick={logoutUser} id="general-logout">
                                <i className="fa fa-sign-out fa-fw"></i>
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;