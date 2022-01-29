import { useState } from "react";
import { get, post } from "../Helpers/APIRequest";

const useCBT = () => {
    const [createLoading, setCreateLoading] = useState();
    const [assessment, setAssessment] = useState();
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState();


    const saveAssessment = async (questions, course_id) => {
        setCreateLoading(true);

        try {
            const { message } = await post(`courses/assessment`, { course_id, assessment: questions }, 'POST', false);
            if (message.trim() === 'Assessment added') {
                // display message  
                console.log(message)
            }
        } catch (err) {
            console.error(err);
        } finally {
            setCreateLoading(false);
        }
    }

    const fetchAssessment = async course_id => {
        try {
            const { assessment: courseAssessment } = await get(`courses/assessment/${course_id}`);
            setAssessment([...courseAssessment]);
        } catch (err) {
            console.error(err)
        }
    }

    const saveQuestion = async (quest) => {
        setLoading(true);
        const question = {
            Question: quest.Question.value,
            OptA: quest.OptA.value,
            OptB: quest.OptB.value,
            OptC: quest.OptC.value,
            OptD: quest.OptD.value,
            OptE: quest.OptE.value,
            Answer: quest.Answer.value,
            CBTId: quest.cbt_id.value
        }
        let method = 'POST', path = '';
        if (Number.isInteger(parseInt(quest.question_id.value))) {
            method = 'PUT';
            question.Id = quest.question_id.value;
            path = '/' + question.Id;
        }

        try {
            await post(`CBTQuestions${path}`, question, method, true);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    const fetchResult = async (course_id) => {
        setLoading(true);
        try {
            const result = await get(`courses/assessment/result/${course_id}`, true);
            setResult(result);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    const submitAssessment = async (course_id, answers, num_of_questions) => {
        try {
            const { result } = await post('course/asessment/submit', { course_id, answers, num_of_questions });
            setResult(result);
        } catch (err) {
            console.error(err);
        }
    }

    return {
        fetchAssessment,
        assessment,
        fetchResult,
        result,
        saveQuestion,
        saveAssessment,
        submitAssessment,
        createLoading,
        loading
    }
}

export default useCBT;