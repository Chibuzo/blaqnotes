import { useState } from "react";
import { formatDate } from "../Helpers/PostUtilities";
import { get, post } from "../Helpers/APIRequest";

const usePost = () => {
    const [note, setNote] = useState();
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const { data } = await get('notes/feed', true);
            return data;
        } catch (err) {
            console.error(err);
        }
    }

    const fetchPost = async id => {
        try {
            const { data } = await get(`notes/${id}`, true);
            return data;
        } catch (err) {
            console.error(err);
        }
    }

    const savePost = async (note) => {
        try {
            return post('notes', { ...note });
        } catch (err) {
            console.error(err);
        }
    }

    const postComment = async comment => {
        try {
            const { data } = await post('notes/comments', { ...comment });
            return data;
        } catch (err) {
            console.error(err);
        }
    }

    const powerUp = async note_id => {
        try {
            const { data } = await post('notes/powerup', { note_id });
            return data;
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
        powerUp,
        formatDate
    }
}

export default usePost;