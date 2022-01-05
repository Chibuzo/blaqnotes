import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import useUserAuth from '../../Hooks/useUserAuth';
import Header from './Shared/Header';
import SideMenu from './Shared/SideMenu';
import Dashboard from './Dashboard';
import Notes from './Notes';
import NotePage from './NotePage';
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
            <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
                data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">

                <Header />

                <SideMenu />

                <div className="page-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <Route exact path="/user" component={Dashboard} />
                            <Route path="/user/courses" component={Courses} />
                            <Route path="/user/notes" component={Notes} />
                            <Route path="/user/new-course" component={NewCourse} />
                            <Route path="/user/course/:id" component={CoursePage} />
                            <Route path="/user/create-test/:course_id" component={CreateAssessment} />
                            <Route path="/user/assessment/:course_id" component={AssessmentPage} />
                            <Route path="/user/timeline" component={Timeline} />
                            <Route path="/user/note/:id/:topic" component={NotePage} />
                        </div>
                    </div>

                    <footer className="footer text-center">

                    </footer>
                </div>
            </div>
        </Router>
    );
}

export default Index;