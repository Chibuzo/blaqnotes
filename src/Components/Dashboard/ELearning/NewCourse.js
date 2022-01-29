import React, { useState, useEffect } from "react";
import useCourse from "../../../Hooks/useCourse";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faCog, faSpinner } from "@fortawesome/free-solid-svg-icons";

const NewCourse = props => {
    const { saveCourse, content, courses, loading } = useCourse();
    let selectedFile = [];
    const [uploadBtn, setUploadBtn] = useState({
        text: 'Upload File',
        icon: 'fa-upload',
        disabled: false
    });

    useEffect(() => {
        if (loading === true) setUploadBtn({ text: 'Uploading File', icon: 'faCog fa-spin', disabled: true })
        else if (loading === false) {
            setUploadBtn({ text: 'Upload File', icon: 'fa-upload', disabled: false });
            props.history.push('/user/courses');
        }
    }, [loading]);

    const submitForm = async e => {
        e.preventDefault();

        const q = e.target.elements;
        const course = {
            course_id: q.course_id.value,
            title: q.title.value
        };
        const data = new FormData();
        data.append('course_vid', selectedFile);
        data.append('course_title', course.title);
        saveCourse(course, data);
    }

    const getSelectedFile = e => selectedFile = e.target.files[0];

    return (
        <div className="col-12">
            <div style={{ width: '40%', margin: 'auto' }} className="mb-5">
                <form onSubmit={submitForm} method="post">
                    <h2>New Course</h2><br />
                    <div className="form-group">
                        <label>Course Title</label>
                        <select name="course_id" className="form-control" required>
                            <option value="">-- Select Course Title --</option>
                            {Array.isArray(courses) && courses.map(course => <option value={course.id}>{course.title}</option>)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Course title</label>
                        <input type="text" className="form-control" name="title" placeholder="eg. Lesson one" />
                    </div>
                    <div className="form-group">
                        <label>Attach File <small>[*]</small></label>
                        <input type="file" name="upload_file" accept="image/*|audio/*|video/*" onChange={getSelectedFile} className="form-control" required />
                    </div>
                    <button type="submit" className="btn btn-inverse">
                        <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon> &nbsp;
                        Save Course
                    </button>
                </form>
            </div>
        </div>
    );
}

export default NewCourse;