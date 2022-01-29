import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import useCBT from "../../../Hooks/useCBT";

import "../../../css/cbt.css";


const TakeTest = (props) => {
    const course_id = props.match.params.course_id;
    const { fetchAssessment, assessment: questions, submitAssessment, result, loading } = useCBT(); // deprecating this soon
    const [testStarted, setTestStarted] = useState("No");
    const [currentPosition, setCurrentPosition] = useState(0);
    const [selectedAns, setSelectedAns] = useState('');
    const answersKey = 'cbt-answers';
    const [currentQuestion, setCurrentQuestion] = useState({
        question: '',
        optA: '',
        optB: '',
        optC: '',
        optD: '',
        optE: ''
    });

    useEffect(() => {
        const fetchCourseAssessment = async () => {
            await fetchAssessment(course_id);
        }

        fetchCourseAssessment();
    }, []);

    useEffect(() => {
        questions && questions.length > 0 && setCurrentQuestion(questions[0]);
    }, [questions]);

    const handleOptChange = e => {
        setSelectedAns(e.target.value);
    };

    const nextQuestion = () => {
        const nextPos = currentPosition + 1;
        if (nextPos < questions.length) {
            navigateQuest(nextPos);
        }
    }

    const prevQuestion = () => {
        const nextPos = currentPosition - 1;
        if (nextPos >= 0) {
            navigateQuest(nextPos);
        }
    }

    const navigateQuest = nextPos => {
        setCurrentQuestion(questions[nextPos]);
        console.log(questions[nextPos])
        selectedAns.length > 0 && saveQuestionState();
        restoreQuestionState(nextPos);
        setCurrentPosition(nextPos);
    }

    const saveQuestionState = () => {
        let answers = localStorage.getItem(answersKey) ? JSON.parse(localStorage.getItem(answersKey)) : [];

        // overwrite answer if the question already has an answer
        answers = answers.filter(ans => currentQuestion.id !== ans.id);

        answers.push({
            id: currentQuestion.id,
            answer: selectedAns
        });

        localStorage.setItem(answersKey, JSON.stringify(answers));
        localStorage.setItem('questID-' + currentQuestion.id, selectedAns);
    }

    const restoreQuestionState = (nextPos) => {
        let ans;
        const nextQuest = questions[nextPos];
        ans = localStorage.getItem('questID-' + nextQuest.id) ? localStorage.getItem('questID-' + nextQuest.id) : '';
        setSelectedAns(ans);
    }

    const submit = () => {
        Swal.fire({
            title: `You are about to submit your assessment`,
            text: `You won't be able to come back and continue`,
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Submit"
        }).then(() => {
            // const answers = JSON.parse(localStorage.getItem(answersKey));
            // submitAssessment(course_id, answers, questions.length);
            // const userData = JSON.parse(localStorage.getItem('userData'));
            // localStorage.clear();
            // localStorage.setItem('userData', JSON.stringify(userData));
            // setTestStarted("Submitted");
        });
    }

    return (
        <div className="col-md-12">
            {testStarted === "No" && (
                <div className="col-sm-12">
                    <section className="panel">
                        <div className="panel-body test-center">
                            <div className="col-md-12">
                                <h2>Test Instruction</h2>
                                <h4>Please read the following instructions very carefully.</h4>

                                <ol className="text-left">
                                    <li>
                                        Questions are presented as multiple-choice. Please read
                                        each question carefully and choose the correct answer.
                                    </li>
                                </ol>
                                <br />
                                <p>Proceed to take the test and Good luck!</p>
                                <br />
                                <button className="btn btn-inverse" onClick={() => setTestStarted("Yes")}>
                                    Start Test
                                </button>

                                <Link to={`/user/course/${course_id}`} className="btn btn-danger float-end">Cancel</Link>
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {testStarted === "Yes" && (
                <div className="col-md-12">
                    <section className="panel">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-7">
                                    <Question question={currentQuestion} selectedAns={selectedAns} handleOptChange={handleOptChange} submit={submit} />
                                </div>

                                <div className="col-md-1"></div>

                                <div className="col-md-4 text-right">

                                </div>
                            </div>

                            <div className="row nav-btns">
                                <div className="col-md-7">
                                    <button className="btn btn-white pull-left" onClick={prevQuestion}><i className="fa fa-caret-left fa-lg"></i>&nbsp; Previous</button>
                                    <button className="btn btn-white pull-right" onClick={nextQuestion}>Next &nbsp;<i className="fa fa-caret-right fa-lg"></i></button>
                                </div>

                                <div className="col-md-5">
                                    <button className="btn btn-inverse pull-right" onClick={submit}>Submit Answers</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {testStarted === "Submitted" && (
                <div className="col-md-12">
                    <section className="panel">
                        <div className="panel-body test-center">
                            {result && (
                                <div className="text-center">
                                    <h3>Your assessment Result:</h3>
                                    <p><strong>Score:</strong> {result.score}</p>
                                    <p><strong>Number of Questions:</strong> {result.NumOfQuestions}</p>
                                    <p><strong>Percentage:</strong> {(result.score / result.NumOfQuestions) * 100}</p>
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
}


const Question = props => {
    const { question: { question, optA, optB, optC, optD, optE }, selectedAns, handleOptChange } = props;

    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <h3 style={{ marginTop: "4px", marginBottom: "20px", fontSize: "28px" }}>Question</h3>
                </div>

                <div className="col-md-6 text-center">

                </div>
            </div>

            <div className="question-wrapper">
                {question}
            </div>

            <ul className="cbt-list">
                {optA && <li><div className="radio"><input name="opt" type="radio" value="A" onChange={handleOptChange} checked={selectedAns === "A"} /><label>{optA}</label></div></li>}
                {optB && <li><div className="radio"><input name="opt" type="radio" value="B" onChange={handleOptChange} checked={selectedAns === "B"} /><label>{optB}</label></div></li>}
                {optC && <li><div className="radio"><input name="opt" type="radio" value="C" onChange={handleOptChange} checked={selectedAns === "C"} /><label>{optC}</label></div></li>}
                {optD && <li><div className="radio"><input name="opt" type="radio" value="D" onChange={handleOptChange} checked={selectedAns === "D"} /><label>{optD}</label></div></li>}
                {optE && <li><div className="radio"><input name="opt" type="radio" value="E" onChange={handleOptChange} checked={selectedAns === "E"} /><label>{optE}</label></div></li>}
            </ul>
        </>
    );
}

export default TakeTest;
