import React, { useEffect } from 'react';
import useCourse from '../../../Hooks/useCourse';
import { Link } from 'react-router-dom';

const Courses = (props) => {
    const { courses } = useCourse();

    return (
        <div className='row justify-content-center'>
            <div className='col-md-12'>
                <h2 className="mb-4 text-center">E-Learning</h2>
                <div className='row'>
                    {courses.map(course => {
                        return (<div className='col-md-4 text-center'>
                            <Link to={`/user/course/${course.id}`}><div className="lesson-box"><i className='fa fa-play-circle fa-3x'></i></div></Link>
                            <Link to={`/user/course/${course.id}`}><h5>{course.title} ({course.lessons.length})</h5></Link>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    );
}

export default Courses;