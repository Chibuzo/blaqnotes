import React from 'react';
import userImg from '../../../images/user.jpg';

const UserThumb = ({ user, full = false, options = {} }) => {
    const { firstname = '', lastname = '', fullname = '', thumb = '', _id = '' } = user;
    const { follow, followUser } = options;

    const thumb_style = full ? 'user-thumb' : 'user-thumb-inline';

    return (
        <div className={thumb_style}>
            <div className="user-pic">
                <img src={userImg} alt="users" className="rounded-circle" width="40" />
            </div>

            {full === true
                ?
                <div className="user-thumb-fullname">{fullname ? fullname : lastname + ' ' + firstname}</div>
                :
                <div className="user-thumb-lastname">{lastname}</div>
            }
            {follow && <button className="btn btn-inverse btn-sm float-right" onClick={() => followUser(_id)}>Follow</button>}
        </div>
    );
}

export default UserThumb;