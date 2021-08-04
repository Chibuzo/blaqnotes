import { useState, useEffect } from "react";
// import { reformatDate } from "../Helpers/PostUtilities";
import { get, post } from "../Helpers/APIRequest";

const usePost = () => {
    // const [note, setNote] = useState();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            return fetchPosts();
        }

        const _posts = getPosts();
        setPosts(_posts);
    }, []);

    const fetchPosts = async () => {
        try {
            const res = await get('notes', true);
            return res.data.notes;
        } catch (err) {
            console.error(err);
        }
    }

    const savePost = async (e, noteData) => {
        e.preventDefault();
        try {
            const res = await post('notes', { ...noteData }, 'POST', true);
            console.log(res.data)
        } catch (err) {
            console.error(err);
        }
    }

    return {
        fetchPosts,
        posts,
        savePost
    }
}

export default usePost;