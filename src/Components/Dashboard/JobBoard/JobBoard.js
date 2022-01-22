import React, { useEffect, useState } from "react";
import { formatDateSince } from "../../../Helpers/PostUtilities";
import { Link } from "react-router-dom";
import useJobBoard from "../../../Hooks/useJobBoard";

const JobBoard = () => {
    const { fetchJobs } = useJobBoard();
    const [jobs, setJobs] = useState([]);

    useEffect(async () => {
        const fetchData = async () => {
            return fetchJobs();
        }

        const { jobs: _jobs } = await fetchData();
        setJobs(_jobs);
    }, []);

    return (
        <div className="job-wrapper px-md-5">
            <div className="row mt-3">
                <div className="col mb-4">
                    <h3 className="float-start">Latest Job Listings</h3>
                    <div className="float-end">
                        <Link to="/user/new-job" style={{ fontSize: '22px' }}><i className="mdi mdi-plus-circle-outline" style={{ fontSize: '45px', position: 'relative', top: '6px' }}></i> Post Job</Link>
                    </div>
                </div>
            </div>
            {jobs.map(job => <Job job={job} key={job._id} />)}
        </div>
    );
}

const Job = ({ job }) => {
    const { _id: id, title = '', job_type, contract, createdAt } = job;
    const url_path = title.split(' ').join('-');

    return (
        <div className="job row pb-3 mt-3">
            <div className="col-md-10">
                <div className="mb-2"><Link to={`/user/job/${id}/${url_path}`}>{title}({job_type})</Link></div>
                {formatDateSince(createdAt)} ago | {contract}
            </div>
            <div className="col-md-2 d-none d-md-block"><Link to={`/user/job/${id}/${url_path}`} className="btn btn-inverse float-end">Read More</Link></div>
        </div>
    );
}

export default JobBoard;