import { useState } from "react";
import useFileUpload from "./useFileUpload";

const useCourseMaterial = () => {
    const [material, setMaterial] = useState({});
    const [loading, setLoading] = useState();
    const { uploadFiles, uploadedFileUrl } = useFileUpload();

    const uploadMaterial = async (material, selectedFile) => {
        setLoading(true);
        await uploadFiles(selectedFile, 'course-material');
        material = {
            FileUrl: uploadedFileUrl[0].Filename,
            FileType: uploadedFileUrl[0].FileType
        };

        try {
            const res = await fetch(process.env.REACT_APP_API_URL + "CourseContents", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(material)
            });
            const data = await res.json();
            setMaterial(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    // const fetchMaterials = classId => {
    //     const res = fetch(process.env.REACT_APP_API_URL + `LecturerClasses/${classId}`);
    //     const classData = res.json();
    // }

    return {
        uploadMaterial,
        material,
        loading
    }
}

export default useCourseMaterial;