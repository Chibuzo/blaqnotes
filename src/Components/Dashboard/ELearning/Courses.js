import React, { useEffect } from 'react';
import useCourse from '../../../Hooks/useCourse';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Courses = (props) => {
    const { courses } = useCourse();

    return (
        <Col span={12}>
            <div className="card">
                <div className="card-body">
                    <h2 className="mb-4">Courses</h2>
                    <Row>
                        {courses.map(course => {
                            return (<Col span={3}>
                                <h5>{course.title}</h5>
                                <div className="lesson-box"></div>
                                <Link to={`/user/course/${course.id}`}>Lessons ({course.lessons.length})</Link>
                            </Col>)
                        })}
                    </Row>
                </div>
            </div>
        </Col>
    );
}

export default Courses;