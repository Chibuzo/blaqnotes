import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useCourse from '../../../Hooks/useCourse';

const CoursePage = (props) => {
    const { fetchCourse, course } = useCourse();
    const [currentLesson, setCurrentLesson] = useState({});

    const { id } = useParams();

    useEffect(async () => {
        const fetchCourseLessons = async () => {
            await fetchCourse(id);
        }

        fetchCourseLessons();
    }, []);

    useEffect(() => {
        course && course.lessons && loadLesson(course.lessons[0]);
    }, [course]);

    const loadLesson = lesson => {
        setCurrentLesson(lesson);
    }

    return (
        <div className='row'>
            <div className='col-md-12 text-center mb-5'>
                <h2 className='mt-2'>{course.title}</h2>
            </div>
            <div className="col-md-9">
                <video width="100%" key={currentLesson.file_location} controls>
                    <source src={`http://localhost:3001/file/video/${currentLesson.file_location}`} type="video/mp4" />
                </video>
                <br />
                <h3>{currentLesson.title}</h3>
                <Link to={`/user/assessment/${id}`} className="float-right btn btn-inverse">Take Quiz</Link>
            </div>

            <div className="col-md-3">
                <h4>Lessons</h4>
                <div className='row'>{course.lessons && course.lessons.map(lesson => <LessonBox lesson={lesson} loadLesson={loadLesson} key={lesson._id} />)}</div>
            </div>
        </div>
    );
}

const LessonBox = ({ lesson, loadLesson }) => {
    const { _id: id, title } = lesson;

    return (
        <div className='col-md-12 mb-3' onClick={() => loadLesson(lesson)}>
            <div className='video-box'>
                <i className='fa fa-play-circle fa-3x'></i>
            </div>
            <h5>{title}</h5>
        </div>
    );
}

export default CoursePage;