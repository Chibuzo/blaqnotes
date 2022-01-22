import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import CustomModal from '../Dashboard/Shared/Modal';
import { useHistory } from 'react-router-dom';
// import useUserAuth from '../../Hooks/useUserAuth';
// import UserThumb from '../Dashboard/Shared/UserThumb';

const NewPost = ({ savePost }) => {
    const [note, setNote] = useState({
        topic: '',
        category: '',
        note: ''
    });
    const [categories] = useState(['Politics', 'Religion', 'Philosophy', 'Education', 'Poetry', 'Life Style']);
    const [modalStatus, setModalStatus] = useState(false);
    let history = useHistory();
    // const { getLoggedInUser } = useUserAuth();

    const handleSubmit = async (e, note) => {
        e.preventDefault();

        await savePost(note);
        setNote({
            topic: '',
            category: '',
            note: ''
        });
        setModalStatus(false);
        history.push('/user/notes');
    }

    return (
        <div className="post-note-div">
            <div className='textarea' onClick={() => setModalStatus(true)}>Share your thought...</div>

            <CustomModal status={modalStatus} setStatus={setModalStatus} title='Write a Note'>
                {/* <div className='text-center'>
                    <UserThumb user={getLoggedInUser()} full={true} />
                </div> */}
                <div className='category-wrapper'>
                    <h5 className='pl-2'>Choose a Category</h5>
                    {categories.map(category => <span className='category' onClick={() => setNote({ ...note, category })} key={category}>{category}</span>)}
                </div>
                <Form onSubmit={e => handleSubmit(e, note)}>
                    <Form.Group>
                        <Form.Control type="text" onChange={e => setNote({ ...note, topic: e.target.value })} value={note.topic} placeholder="Enter a title..." />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Control as="textarea" rows={15} onChange={e => setNote({ ...note, note: e.target.value })} value={note.note} placeholder="Start your note here..." />
                    </Form.Group>

                    <button type="submit" style={{ padding: '7px 45px' }} className="btn btn-inverse btn-lg float-right">
                        Post
                    </button>
                </Form>
            </CustomModal>
        </div>
    );
}

export default NewPost;