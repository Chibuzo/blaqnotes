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
        try {
            return get('user/dashboard', true);
        } catch (err) {
            console.log(err.message)
        }
    }


    return {
        friends,
        setFriends,
        suggestedUsers,
        setSuggestedUsers,
        recentPosts
    }
}

export default useDashboard;