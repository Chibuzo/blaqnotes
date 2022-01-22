import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useHistory, Link } from 'react-router-dom';
import useJobBoard from "../../../Hooks/useJobBoard";
// import UserThumb from '../Dashboard/Shared/UserThumb';

const job_fields = {
    title: '',
    location: '',
    job_type: '',
    contract: '',
    qualifications: '',
    responsibilities: '',
    job_email: '',
    createdAt: null
};

const NewJob = () => {
    const [job, setJob] = useState(job_fields);
    const { saveJob } = useJobBoard();
    let history = useHistory();

    const handleSubmit = async (e, job) => {
        e.preventDefault();

        await saveJob(job);
        setJob(job_fields);
        history.push('/user/jobs');
    }

    return (
        <div className='row justify-content-center mt-4'>
            <div className='col-md-8'>
                <div className='row'>
                    <div className='col-md-10'>
                        <h3>Post New Job</h3>
                        <br />
                    </div>
                    <div className="col-md-2">
                        <Link to="/user/jobs" className="btn btn-inverse float-end">Cancel</Link>
                    </div>
                </div>

                <Form onSubmit={e => handleSubmit(e, job)}>
                    <Form.Group>
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control type="text" size="lg" onChange={e => setJob({ ...job, title: e.target.value })} value={job.title} placeholder="Job Title" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Job Location</Form.Label>
                        <Form.Control type="text" size="lg" onChange={e => setJob({ ...job, location: e.target.value })} value={job.location} placeholder="Location. e.g South Africa, Cape Town" required />
                    </Form.Group>
                    <div className='row'>
                        <div className='col-md-6'>
                            <Form.Group>
                                <Form.Label>Job type</Form.Label>
                                <Form.Control size="lg" as="select" onChange={e => setJob({ ...job, job_type: e.target.value })} required>
                                    <option value="">-- Select Type --</option>
                                    <option value="Onsite">Onsite</option>
                                    <option value="Remote">Remote</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
                        <div className='col-md-6'>
                            <Form.Group>
                                <Form.Label>Contract type</Form.Label>
                                <Form.Control size="lg" as="select" onChange={e => setJob({ ...job, contract: e.target.value })} required>
                                    <option value="">-- Contract Type --</option>
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
                    </div>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Qualifications</Form.Label>
                        <Form.Control as="textarea" rows={4} onChange={e => setJob({ ...job, qualifications: e.target.value })} value={job.qualifications} placeholder="Qualifications" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Responsibilities</Form.Label>
                        <Form.Control as="textarea" rows={4} onChange={e => setJob({ ...job, responsibilities: e.target.value })} value={job.responsibilities} placeholder="Responsibilities" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Application Email</Form.Label>
                        <Form.Control type="text" size="lg" onChange={e => setJob({ ...job, job_email: e.target.value })} value={job.job_email} placeholder="For candidates' resume" aria-required />
                    </Form.Group>

                    <button type="submit" style={{ padding: '7px 45px' }} className="btn btn-inverse btn-lg float-right">
                        Post Job
                    </button>
                </Form>
            </div>
        </div>
    );
}

export default NewJob;