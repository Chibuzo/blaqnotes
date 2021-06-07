import React from "react";

const FormModal = props => {
    const alert = props.alert;

    return (
        <div className="modal inmodal fade in" id={props.modalId} tabIndex="-1" role="dialog" aria-labelledby="remoteModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" id={`close-${props.id}`} data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 className="modal-title" id="myModalLabel">{props.title}</h4>
                    </div>

                    <form method="post" id={`form-${props.id}`} onSubmit={props.handleSubmit}>
                        <div className="modal-body">
                            {props.children}
                            <div className={`alert alert-${alert.type} ${alert.status}`}>{alert.text}</div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-default" id={`close-${props.id}-modal`} data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary pull-right" disabled={props.submitBtn.disabled}><i className={`fa ${props.submitBtn.icon}`}></i> {props.submitBtn.text}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

FormModal.defaultProps = {
    alert: {
        type: '',
        status: 'hidden',
        text: ''
    }
};
export default FormModal;