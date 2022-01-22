import React from 'react';
import UserThumb from './Shared/UserThumb';
import useDashboard from '../../Hooks/useDashboard';
import useUser from '../../Hooks/useUser';
import NewPost from '../Timeline/NewPost';
import usePost from '../../Hooks/usePost';

const Dashboard = () => {
    //const user = { fullname: 'Chibuzo', id: 1 };
    const { friends, setFriends, suggestedUsers, setSuggestedUsers, recentPosts } = useDashboard();
    const { followUser } = useUser();
    const { savePost } = usePost();

    const follow_user = async id => {
        const newFollow = await followUser(id);
        setFriends([...friends, { ...newFollow }]);
        setSuggestedUsers([...suggestedUsers.filter(usr => String(usr._id) !== String(id))]);
    }

    return (
        <div id="dashboard">
            <div className="row">
                <div className="col-8">
                    <div className="online-friends">
                        <h5>Online Now</h5>
                        <br />
                        <div>
                            {friends.map(friend => (<span key={friend._id}>{<UserThumb user={friend} />}</span>))}
                        </div>
                    </div>

                    <div className="post-note">
                        <NewPost savePost={savePost} />
                    </div>
                </div>

                <div className="col-4 px-5">
                    <h4>Suggestions for you <small className="float-right"><a href="#">See All</a></small></h4>
                    <div className="user-suggestions">
                        {suggestedUsers.map(user => <div key={user._id}><UserThumb user={user} full={true} options={{ follow: true, followUser: follow_user }} /></div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;