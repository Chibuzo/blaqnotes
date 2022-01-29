import React from 'react';
import CBTQuestionForm from './CBTQuestionForm';

const CreateAssessment = (props) => {

    return (
        <div className="col-12">
            <CBTQuestionForm course_id={props.match.params.course_id} history={props.history} />
        </div>
    );
}

export default CreateAssessment;