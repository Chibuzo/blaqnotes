import { useState, useEffect } from "react";
// import { reformatDate } from "../Helpers/PostUtilities";
import { get } from "../Helpers/APIRequest";

const useDashboard = () => {
    const [friends, setFriends] = useState([]);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(async () => {
        const fetchData = async () => {
            return fetchDashboardData();
        }

        const { friends = [], popularUsers, recentNotes } = await fetchData();

        setFriends(friends);
        setSuggestedUsers(popularUsers);
        setRecentPosts(recentNotes);
    }, []);

    const fetchDashboardData = async () => {
        const res = await get('user/dashboard', true);
        return res.data;
    }


    return {
        friends,
        suggestedUsers,
        recentPosts
    }
}

export default useDashboard;