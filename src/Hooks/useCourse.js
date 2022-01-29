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
            const uploadResult = await post('file/upload', fileData, 'POST', false);
            if (!uploadResult.status) throw new Error(uploadResult.message);

            lessonData.file_location = uploadResult.data.filename;
            const lesson = await post('courses/lesson', lessonData, 'POST', false);
            setContent([...content, ...lesson]);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    const fetchCourseList = async () => {
        //setLoading(true);

        try {
            const { courses: courseList } = await get('courses');
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
            const { course: _course } = await get('courses/' + id);
            setCourse(_course);
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