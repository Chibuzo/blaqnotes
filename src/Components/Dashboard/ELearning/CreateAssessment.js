import React from 'react';
import CBTQuestionForm from './CBTQuestionForm';

const CreateAssessment = (props) => {

    return (
        <div className="col-12">
            <div className="card">
                <div className="card-body">
                    <CBTQuestionForm course_id={props.match.params.course_id} history={props.history} />
                </div>
            </div>
        </div>
    );
}

export default CreateAssessment;