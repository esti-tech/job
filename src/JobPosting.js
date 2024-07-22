import React, { useState } from 'react';
import axios from 'axios';
import './JobPosting.css';
import Header from './Header';

const JobPostingPage = () => {
    const [job, setJob] = useState({
        position: '',
        location: '',
        department: '',
        reportsTo: '',
        jobDescription: '',
        keyResponsibilities: '',
        qualifications: '',
        applicationDeadline: '',
        salary: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJob({
            ...job,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/register/job', job)
            .then(response => {
                console.log('Job posted successfully:', response.data);
                alert("Job posted successfully! Redirecting to home page...");
                window.location.href = "/";
            })
            .catch(error => {
                console.error('There was an error posting the job!', error);
            });
    };

    return (
        <div className="job-posting-page">
            <Header/>
            <h1>Post a Job Vacancy</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Position:
                    <input type="text" name="position" value={job.position} onChange={handleChange} required />
                </label>
                <label>
                    Location:
                    <input type="text" name="location" value={job.location} onChange={handleChange} required />
                </label>
                <label>
                    Department:
                    <input type="text" name="department" value={job.department} onChange={handleChange} required />
                </label>
                <label>
                    Reports To:
                    <input type="text" name="reportsTo" value={job.reportsTo} onChange={handleChange} required />
                </label>
                <label>
                    Job Description:
                    <textarea name="jobDescription" value={job.jobDescription} onChange={handleChange} required></textarea>
                </label>
                <label>
                    Key Responsibilities:
                    <textarea name="keyResponsibilities" value={job.keyResponsibilities} onChange={handleChange} required></textarea>
                </label>
                <label>
                    Qualifications:
                    <textarea name="qualifications" value={job.qualifications} onChange={handleChange} required></textarea>
                </label>
                <label>
                    Application Deadline:
                    <input type="date" name="applicationDeadline" value={job.applicationDeadline} onChange={handleChange} required />
                </label>
                <label>
                    Salary:
                    <input type="text" name="salary" value={job.salary} onChange={handleChange} />
                </label>
                <button type="submit">Post Job</button>
            </form>
        </div>
    );
};

export default JobPostingPage;
