import React, { useState, useEffect } from 'react';
import useCBT from '../../../Hooks/useCBT';

const questions = [];
const CBTQuestionForm = (props) => {
    const questionLimit = 5;

    const [flag, setFlag] = useState(true);
    const [btnType, setBtnType] = useState('button');
    const [btnText, setBtnText] = useState('Next Question');
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [question, setQuestion] = useState({
        question: '',
        optA: '',
        optB: '',
        optC: '',
        optD: '',
        optE: '',
        answer: ''
    });

    const { saveAssessment } = useCBT();

    const updateControl = (e) => {
        e.persist();
        setQuestion(question => ({ ...question, [e.target.name]: e.target.value }));
    }

    // load question for editing
    useEffect(() => {
        props.question && props.question.Question && setQuestion(props.question);
    }, [props.question]);


    const pushQuestion = () => {
        questions.push(question);
        setQuestion({
            question: '',
            optA: '',
            optB: '',
            optC: '',
            optD: '',
            optE: '',
            answer: ''
        });
        const cur_quest = currentQuestion + 1;
        setCurrentQuestion(cur_quest);

        if (cur_quest == questionLimit) {
            setFlag(false);
            setBtnType('submit');
            setBtnText('Save Assessment');
        }
    }


    const handleSubmit = async e => {
        e.preventDefault();
        questions.push(question);
        await saveAssessment(questions, props.course_id);
        props.history.push(`/user/course/${props.course_id}`);
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <div id="manual-question">
                <div className="form-group">
                    <label>Question {currentQuestion} / {questionLimit}</label>
                    <textarea name="question" value={question.question} onChange={updateControl} rows="4" className="form-control editor"></textarea>
                </div>

                <div className="question-image"></div>

                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <label>Option A</label>
                            <input type="text" name="optA" value={question.optA} onChange={updateControl} className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label>Option B</label>
                            <input type="text" name="optB" value={question.optB} onChange={updateControl} className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <label>Option C</label>
                            <input type="text" name="optC" value={question.optC} onChange={updateControl} className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label>Option D</label>
                            <input type="text" name="optD" value={question.optD} onChange={updateControl} className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <label>Option E</label>
                            <input type="text" name="optE" value={question.optE} onChange={updateControl} className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label>Answer</label>
                            <select name="answer" value={question.answer} onChange={updateControl} className="form-control" required>
                                <option value="">-- Choose Answer --</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <input type="hidden" name="course_id" value={props.course_id} />
                    <input type="hidden" name="question_id" value={question.Id} />
                </div>
                <div className="form-group">
                    <button type={btnType} className="btn btn-primary btn-lg pull-right" id="submit-btn" onClick={flag ? pushQuestion : null}>{btnText}</button>
                </div>
            </div>
        </form>
    );
}

export default CBTQuestionForm;