import { useState } from "react";
import { formatDate } from "../Helpers/PostUtilities";
import { get, post } from "../Helpers/APIRequest";

const usePost = () => {
    const [note, setNote] = useState();
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const res = await get('notes/feed', true);
            return res.data;
        } catch (err) {
            console.error(err);
        }
    }

    const fetchPost = async id => {
        try {
            const res = await get(`notes/${id}`, true);
            return res.data.note;
        } catch (err) {
            console.error(err);
        }
    }

    const savePost = async (note) => {
        try {
            const res = await post('notes', { ...note });
            return res.data;
        } catch (err) {
            console.error(err);
        }
    }

    const postComment = async comment => {
        try {
            const res = await post('notes/comments', { ...comment });
            return res.data.comments;
        } catch (err) {
            console.error(err);
        }
    }

    return {
        fetchPosts,
        fetchPost,
        posts,
        savePost,
        postComment,
        formatDate
    }
}

export default usePost;