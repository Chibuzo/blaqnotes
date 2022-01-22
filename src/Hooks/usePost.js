import { useState } from "react";
import { formatDate } from "../Helpers/PostUtilities";
import { get, post } from "../Helpers/APIRequest";

const usePost = () => {
    const [note, setNote] = useState();
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            return get('notes/feed', true);
        } catch (err) {
            console.error(err);
        }
    }

    const fetchPost = async id => {
        try {
            return get(`notes/${id}`, true);
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
            return post('notes/comments', { ...comment });
        } catch (err) {
            console.error(err);
        }
    }

    const powerUp = async note_id => {
        try {
            return post('notes/powerup', { note_id });
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