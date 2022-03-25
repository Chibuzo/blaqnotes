import React from "react";
import { get, post } from "../Helpers/APIRequest";

const useJobBoard = () => {
    const fetchJobs = async () => {
        try {
            const { data } = await get('jobs', true);
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    const fetchJob = async id => {
        try {
            const { data } = await get(`jobs/${id}`, true);
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    const saveJob = async job => {
        try {
            const { data } = await post('jobs', job);
            return data;
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