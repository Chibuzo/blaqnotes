import React, { useEffect, useState } from "react";
import useJobBoard from '../../../Hooks/useJobBoard';
import { formatDate } from "../../../Helpers/PostUtilities";
import { useParams, Link } from 'react-router-dom';

const job_fields = {
    title: '',
    location: '',
    job_type: '',
    contract: '',
    qualifications: '',
    responsibilities: '',
    createdAt: ''
};
const JobPage = () => {
    const { fetchJob } = useJobBoard();
    const [job, setJob] = useState(job_fields);
    const { id } = useParams();

    useEffect(async () => {
        const fetchData = async () => {
            return fetchJob(id);
        }

        const data = await fetchData();
        setJob(data.job);
    }, []);


    return (
        <div>
            <div className="row px-md-5 mt-5" style={{ borderBottom: "#ccc solid" }}>
                <div className="col-md-10">
                    <div className="pb-3">
                        <h3>{job.title} ({job.job_type})</h3>
                        {job.location}
                    </div>
                </div>
                <div className="col-md-2">
                    <Link to="/user/jobs" className="btn btn-inverse float-end">Back to Jobs</Link>
                </div>
            </div>
            <div className="row px-md-5 mt-4">
                <div className="col-md-6">
                    <h4>Qualifications</h4>
                    <p className="mt-3">{job.qualifications}</p>
                </div>
                <div className="col-md-6">
                    <h4>Responsibilities</h4>
                    <p className="mt-3">{job.responsibilities}</p>
                </div>
            </div>

            <div className="row px-md-5 mt-4">
                <div className="alert alert-info">If you are interested in this job, send an email to this address ({job.job_email}) using this job title as subject and attach your resume.</div>
            </div>
        </div>
    );
}

export default JobPage;