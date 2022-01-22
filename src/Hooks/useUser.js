import { useEffect, useState } from "react";
import { get, post } from "../Helpers/APIRequest";

const useUser = () => {
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);

    const findUser = async id => {
        try {
            return get('user');
        } catch (err) {
            console.error(err);
        }
    }

    const followUser = async id => {
        return post('user/follow', { id });
    }

    return {
        followUser
    }
}

export default useUser;
