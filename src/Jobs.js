import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';
import JobPostingTable from './JobPostingTable';

const Jobs =  () => {
    const [jobs, setJobs] = useState([]);
    
    useEffect(() => {
        
        axios.get('http://localhost:5000/api/jobs')
            .then(response => setJobs(response.data))
            .catch(error => console.error('Error fetching job postings:', error));
 
    }, []);

    return (
        <div className="dashboard">
            <h1>EplusApp (Digital solutions Provider)</h1>

            <h1>Available Jobs</h1>
            <div className="dashboard-section">
                <h2>Job Postings</h2>
                    <h3>EplusApp emerged in 2012, driven by Banchayehu Desalegn Amsayaw's visionary
                    leadership and passion for leveraging technology to tackle urban challenges. The
                    company's genesis was rooted in the recognition of the increasing complexities faced
                    by cities, from transportation inefficiencies to environmental concerns and the need for
                    smarter infrastructure</h3>
                <h3> Travel Services Division of Peep Travel Agent (Digital Services Provider)
 The Travel Services Division powered by EplusApp is the vital part in the company to
 provide digital services, responsible for managing and overseeing all travel-related
 operations. This division ensures that EplusApp travel services, including the Peep
 Travel Agent services, operate smoothly and efficiently, providing exceptional
 experiences for customers.</h3>
 <JobPostingTable jobs={jobs} />
 <h2> Test and Interview Schedule:</h2>
 <table>
    <thead>
        <tr>
            <th>Date</th>
            <th>Activity</th>
            <th>Test time</th>
            <th>Location </th>
            
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Sun, July 28,
            2024</td>
            <td>Written Test</td>
            <td>9:00 AM</td>
            <td>Peep Travel Agent Office@BahirDar Gojam Ber(አዲሱ) Bus
            Station</td>
           
        </tr>
        <tr>
            <td>Mo, July 29,
            2024</td>
            <td>Interviews for All
            Positions</td>
            <td>9:00 AM</td>
            <td>Peep Travel Agent Office@BahirDar Gojam Ber(አዲሱ) Bus
            Station</td>
           
        </tr>
            </tbody>
 </table>
 <p>contact  : for furture inquiries please contact out HR department at 0918484782 or email eplusapp8@gmail.com</p>
                
            </div>
            
        </div>
    );
};

export default Jobs;