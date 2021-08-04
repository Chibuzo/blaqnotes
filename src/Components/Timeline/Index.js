import React from 'react';
import NewPost from './NewPost';
import usePost from '../../Hooks/usePost';

const Timeline = () => {
    const { posts, savePost } = usePost();

    return (
        <div className="col-12">
            <div className="card">
                <div className="card-body">
                    <NewPost savePost={savePost} />
                </div>
            </div>
        </div>
    );
}

export default Timeline;