import React from "react";

const ContentModal = (props) => {

    return (
        <div className="modal inmodal fade in" id={props.modalId} tabIndex="-1" role="dialog" aria-labelledby="remoteModalLabel" aria-hidden="true">
            <div className={`modal-dialog ${props.modalSize}`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 className="modal-title" id="myModalLabel">{props.title}</h4>
                    </div>

                    <div className="modal-body">
                        {props.children}
                        <div className='alert alert-info hidden'></div>
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentModal;