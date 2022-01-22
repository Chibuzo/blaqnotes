import React from "react";
import { get, post } from "../Helpers/APIRequest";

const useJobBoard = () => {
    const fetchJobs = async () => {
        try {
            return get('jobs', true);
        } catch (err) {
            console.log(err);
        }
    }

    const fetchJob = async id => {
        try {
            return get(`jobs/${id}`, true);
        } catch (err) {
            console.log(err);
        }
    }

    const saveJob = async job => {
        try {
            return post('jobs', job);
        } catch (err) {
            console.log(err);
        }
    }

    return {
        fetchJob,
        fetchJobs,
        saveJob
    }
}

export default useJobBoard;