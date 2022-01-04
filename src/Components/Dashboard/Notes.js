import React, { useEffect, useState } from "react";
import usePost from '../../Hooks/usePost';
import Table from 'react-bootstrap/Table';
import powerUp from '../../images/power-up.png';
import replies from '../../images/replies.png';
import shares from '../../images/share.png';
import { Link } from "react-router-dom";

const Notes = () => {
    const { fetchPosts, formatDate } = usePost();
    const [myNotes, setMyNotes] = useState([]);
    const [friendsNotes, setFriendsNotes] = useState([]);
    const [myNotesVisibility, setMyNotesVisibility] = useState('');
    const [friendsNoteVisibility, setFriendsNoteVisibility] = useState('d-none');

    useEffect(async () => {
        const getPosts = async () => {
            return fetchPosts();
        }

        const { myNotes, friendsNotes } = await getPosts();
        setMyNotes(myNotes);
        setFriendsNotes(friendsNotes);
    }, []);

    const doTabLeft = (e) => {
        setMyNotesVisibility('');
        setFriendsNoteVisibility('d-none');
        document.querySelector("#rightTab").classList.remove("tab-bg-active-right")
        document.querySelector("#leftTab").classList.add("tab-bg-active-left");
    }

    const doTabRight = (e) => {
        setMyNotesVisibility('d-none');
        setFriendsNoteVisibility('');
        document.querySelector("#leftTab").classList.remove("tab-bg-active-left")
        document.querySelector("#rightTab").classList.add("tab-bg-active-right");
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="row text-center text-white">
                        <div className="col tab-bg" onClick={doTabLeft} id="leftTab"><h2>My Notes</h2></div>
                        <div className="col tab-bg-active-right" onClick={doTabRight} id="rightTab"><h2>Notes from Friends</h2></div>
                    </div>
                    <Table className="mt-5">
                        <tbody className={`note-listing ${myNotesVisibility}`}>
                            {myNotes.map(note => {
                                return (<tr><td>{formatDate(note.createdAt)}</td><td>{note.category}</td><td><Link to={`/user/note/${note._id}/${note.topic.split(' ').join('-')}`}><strong>{note.topic}</strong></Link></td><td><span><img src={powerUp} /> {note.power_up.length}</span> <span><img src={replies} /> {note.comments.length}</span><span><img src={shares} /> 0</span></td></tr>)
                            })}
                        </tbody>
                        <tbody className={`note-listing ${friendsNoteVisibility}`}>
                            {friendsNotes.map(note => {
                                return (<tr><td>{formatDate(note.createdAt)}</td><td>{note.category}</td><td><Link to={`/user/note/${note._id}/${note.topic.split(' ').join('-')}`}><strong>{note.topic}</strong></Link></td><td><span><img src={powerUp} /> {note.power_up.length}</span> <span><img src={replies} /> {note.comments.length}</span><span><img src={shares} /> 0</span></td></tr>)
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default Notes;