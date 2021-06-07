import React, { useEffect, useState } from 'react'; 

const UserThumb = ({ user: userData }) => {
    const [user, setUser] = useState({
        fullname: '',
        id: ''
    });
    
    useEffect(() => {
        setUser({ ...userData });
    }, [userData]);
    
    return(
        <div className="user-thumb">
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#f8f8f8', marginRight: '20px' }} className="float-left"></div>
            <div className="user-thumb-name">{user.fullname}</div>
        </div>
    );
}

export default UserThumb;