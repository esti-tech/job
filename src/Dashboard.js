import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';
import JobPostingTable from './JobPostingTable';
import UserTable from './UserTable';
import Header from './Header';
import jobsData from './jobsData';
const Dashboard = () =>
{
    const [ jobs, setJobs ] = useState( [] );
    const [ users, setUsers ] = useState( [] );

    useEffect( () =>
    {
        // Fetch job postings and users
        // axios.get( 'http://localhost:5000/api/jobs' )
        //     .then( response => setJobs( response.data ) )
        //     .catch( error => console.error( 'Error fetching job postings:', error ) );
        // setJobs(jobsData);

        axios.get( 'https://peepbackend.peep.et//api/vacancy ' )
            .then( response => setUsers( response.data ) )
            .catch( error => console.error( 'Error fetching users:', error ) );
    }, [] );

    return (
        <div className="dashboard">
            {/* <Header /> */ }
            <h1>Dashboard</h1>
            {/* <div className="dashboard-section">
                <h2>Job Postings</h2>
                <JobPostingTable jobs={jobs} />
            </div> */}
            <div className="dashboard-section">
                <h2>Applicants</h2>
                <UserTable users={ users } jobs={ jobsData } />
            </div>
        </div>
    );
};

export default Dashboard;