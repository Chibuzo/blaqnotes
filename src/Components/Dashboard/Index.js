import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import useUserAuth from '../../Hooks/useUserAuth';
import Header from './Shared/Header';
import SideMenu from './Shared/SideMenu';
import Breadcrumb from './Shared/Breadcrumb';
import Dashboard from './Dashboard';
import NewCourse from './ELearning/NewCourse';
import Courses from './ELearning/Courses';
import CoursePage from './ELearning/CoursePage';
import CreateAssessment from './ELearning/CreateAssessment';
import AssessmentPage from './ELearning/AssessmentPage';
import Timeline from '../Timeline/Index';

const Index = (props) => {
    const { user, isLoggedIn } = useUserAuth();

    useEffect(() => {
        isLoggedIn();
        //if (!user || !user.isLoggedIn) props.history.push('/')
    }, []);

    return (
        <Router>
            <div className="preloader">
                <div className="lds-ripple">
                    <div className="lds-pos"></div>
                    <div className="lds-pos"></div>
                </div>
            </div>

            <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
                data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">

                <Header />

                <SideMenu />

                <div className="page-wrapper">
                    <Breadcrumb />

                    <div class="container-fluid">
                        <div class="row">
                            <Route exact path="/user/dashboard" component={Dashboard} />
                            <Route path="/user/courses" component={Courses} />
                            <Route path="/user/new-course" component={NewCourse} />
                            <Route path="/user/course/:id" component={CoursePage} />
                            <Route path="/user/create-test/:course_id" component={CreateAssessment} />
                            <Route path="/user/assessment/:course_id" component={AssessmentPage} />
                            <Route path="/user/timeline" component={Timeline} />
                        </div>
                    </div>

                    <footer class="footer text-center">
                        Copyright &copy 2021
                    </footer>
                </div>
            </div>
        </Router>
    );
}

export default Index;