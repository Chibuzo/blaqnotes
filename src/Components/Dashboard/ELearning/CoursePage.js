import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import useCourse from '../../../Hooks/useCourse';

const CoursePage = (props) => {
    const { fetchCourse, course } = useCourse();
    const [currentLesson, setCurrentLesson] = useState({});

    useEffect(async () => {
        const fetchCourseLessons = async () => {
            await fetchCourse(props.match.params.id);
        }

        fetchCourseLessons();
    }, []);

    const loadLesson = lesson => {
        console.log(lesson)
        setCurrentLesson(lesson);
    }

    return (
        <>
            <div className="col-3">
                <div className="card">
                    <div className="card-body">
                        <h4>Lessons</h4>
                        <ul>
                            {course.lessons && course.lessons.map(lesson => <li onClick={() => loadLesson(lesson)}><Link to="#">[{lesson.title}]</Link></li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-9">
                <div className="card">
                    <div className="card-body">
                        <h6>[ {course.title} ]</h6>
                        <h4>{currentLesson.title}</h4>
                        <br />
                        <video width="100%" key={currentLesson.file_location} controls>
                            <source src={`http://localhost:3001/file/video/${currentLesson.file_location}`} type="video/mp4" />
                        </video>
                        <br /><br />
                        <Link to={`/user/course/assessment${props.match.params.id}`} className="float-right btn btn-primary">Take Assessment</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoursePage;