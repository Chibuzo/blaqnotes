import { useState } from "react";
const request = require("../Helpers/APIRequest");

const useCBTPage = () => {
    const [test, setTest] = useState({
        Questions: [],
        Category: '',
        Duration: '',
        TItle: ''
    });
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const fetchTest = async (testid) => {
        setLoading(true);
        try {
            const data = await request.fetchData(`CBTs/fetchQuestions/${testid}`, true);
            setTest(data[0]);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    const submitTest = async (studentId, cbtId, answers, numOfQuest, showResult) => {
        const data = {
            StudentId: studentId,
            Id: cbtId,
            ShowResult: showResult,
            NumOfQuestions: numOfQuest,
            CBTChosenAnswers: answers
        };

        setSubmitting(true);

        try {
            const res = await request.saveData(`CBTs/mark`, data);
            if (res.ok) {
                const result = await res.json();
                setResult(result);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    }

    return {
        fetchTest,
        test,
        result,
        submitTest,
        submitting,
        loading
    }
}

export default useCBTPage;