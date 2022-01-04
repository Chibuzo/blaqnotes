import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const CustomModal = ({ children, status, setStatus, title }) => {

    return (
        <>
            <Modal
                show={status}
                onHide={() => setStatus(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        <h1 className='text-center'>{title}</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='px-5'>
                    {children}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CustomModal;