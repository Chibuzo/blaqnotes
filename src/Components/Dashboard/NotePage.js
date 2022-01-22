import React, { useEffect, useState } from "react";
import usePost from '../../Hooks/usePost';
import powerUpImg from '../../images/power-up.png';
import replies from '../../images/replies.png';
import shares from '../../images/share.png';
import Form from 'react-bootstrap/Form';
import useUserAuth from '../../Hooks/useUserAuth';
import { useParams } from 'react-router-dom';

const NotePage = () => {
    const { fetchPost, postComment, powerUp, formatDate } = usePost();
    const { isLoggedIn } = useUserAuth();

    const [note, setNote] = useState({
        topic: '',
        category: '',
        note: '',
        power_up: [],
        comments: []
    });
    const [commentBody, setCommentBody] = useState('');

    const { id } = useParams();

    useEffect(async () => {
        const fetchData = () => {
            return fetchPost(id);
        }

        const noteData = await fetchData();
        setNote(noteData.note);
    }, []);

    const handleSubmit = async (e, commentBody) => {
        e.preventDefault();

        const comment = {
            comment: commentBody,
            note_id: id
        };

        const comments = await postComment(comment);
        setCommentBody('');
        setNote({ ...note, comments });
    }

    const powerUpNote = async note_id => {
        const { id: user_id } = isLoggedIn();

        if (note.power_up.includes(user_id)) return;
        const power_up = await powerUp(note_id);
        setNote({ ...note, power_up });
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="note p-5">
                        {formatDate(note.createdAt)} <span className="category">{note.category}</span> <strong>Title:</strong> {note.topic}
                        <p className="text-white mt-3">{note.note}</p>
                    </div>
                    <div className="note-listing text-center"><span onClick={e => powerUpNote(id)} title="Power Up"><img src={powerUpImg} /> {note.power_up.length}</span> <span><img src={replies} /> {note.comments.length}</span><span><img src={shares} /> 0</span></div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="comments  text-white mt-5 p-5">
                        <h3 className="text-center mb-5">REPLIES</h3>

                        <Form onSubmit={e => handleSubmit(e, commentBody)}>
                            <Form.Group controlId="formBasicText">
                                <Form.Control as="textarea" rows={3} onChange={e => setCommentBody(e.target.value)} value={commentBody} placeholder="Start your reply here..." />
                            </Form.Group>

                            <button type="submit" style={{ padding: '7px 45px' }} className="btn btn-inverse btn-lg float-right">
                                Post
                            </button>
                        </Form>
                        <div className="clearfix mb-4"></div>
                        {note.comments.map(comment => <Comment comment={comment} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

const Comment = ({ comment }) => {
    const { posted_on, fullname, comment: body } = comment;
    const { formatDate } = usePost();

    return (
        <div className="comment mb-5">
            <div style={{ padding: '5px 0', borderBottom: 'solid thin #fff', color: '#333' }}><strong>{fullname}</strong><span className="float-right">{formatDate(posted_on)}</span></div>
            {body}
        </div>
    );
}

export default NotePage;