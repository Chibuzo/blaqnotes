import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NewPost = ({ savePost }) => {
    const [post, setPost] = useState();

    return (
        <>
            <Form onSubmit={e => savePost(e, post)}>
                <Form.Group controlId="formBasicText">
                    <Form.Label>What's on your mind?</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={e => setPost(e.target.value)} placeholder="What's on your mind?" />
                </Form.Group>

                <Button variant="danger" type="submit" style={{ padding: '7px 45px' }} className="clearfix">
                    Post
                </Button>
            </Form>
        </>
    );
}

export default NewPost;