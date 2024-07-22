import React from 'react';
// import './JobPostingTable.css';
import { Link } from 'react-router-dom';
const JobPostingTable = ({ jobs }) => {
    return (
        <table className="job-posting-table">
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Location</th>
                    <th>Department</th>
                    <th>Reports To</th>
                    <th>Application Deadline</th>
                    {/* <th>Salary</th> */}
                    <th>Action</th>
                    
                </tr>
            </thead>
            <tbody>
                {jobs.map(job => (
                    <tr key={job._id}>
                        <td>{job.position}</td>
                        <td>{job.location}</td>
                        <td>{job.department}</td>
                        <td>{job.reportsTo}</td>
                        <td>{new Date(job.applicationDeadline).toLocaleDateString()}</td>
                        {/* <td>{job.salary}</td> */}
                        <td><Link to={`/RegistrationPage/${job.id}`}><button>Apply</button></Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default JobPostingTable;