import { useState, useEffect } from "react";
import { get, post } from "../Helpers/APIRequest";

const useCourse = () => {
    const [content, setContent] = useState({});
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({});
    const [loading, setLoading] = useState();

    useEffect(() => {
        const fetchCourses = async () => {
            await fetchCourseList();
        }

        fetchCourses();
    }, []);

    const saveCourse = async (lessonData, fileData) => {
        setLoading(true);

        try {
            const { data } = await post('file/upload', fileData, 'POST', false);
            const { filename } = data;
            if (!filename) throw new Error('Couldn\'t upload file at this time');

            lessonData.file_location = filename;
            const { data: _data } = await post('courses/lesson', lessonData, 'POST', false);
            setContent([...content, ..._data.lesson]);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    const fetchCourseList = async () => {
        //setLoading(true);

        try {
            const { data } = await get('courses');
            const { courses: courseList } = data;
            setCourses(courseList.map(course => ({ title: course.title, id: course._id, lessons: course.lessons })));
        } catch (err) {
            console.error(err);
        } finally {
            //setLoading(false);
        }
    }

    const fetchCourse = async id => {
        setLoading(true);

        try {
            const { data } = await get('courses/' + id);
            setCourse(data.course);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return {
        saveCourse,
        fetchCourseList,
        fetchCourse,
        course,
        courses,
        content,
        loading
    }
}

export default useCourse;