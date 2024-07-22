import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './RegistrationPage.css';
const RegistrationPage = () => {
    const { id } = useParams();
    const [job,setJob] = useState([]);
    console.log(id);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        jobid: id,
    });

    const generatePassword = () => {
        const phoneLast6 = formData.phone.slice(-6);
        return phoneLast6 || Math.random().toString(36).slice(-6);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const password = generatePassword();
        const formDataWithFile = new FormData();
        formDataWithFile.append('name', formData.name);
        formDataWithFile.append('phone', formData.phone);
        formDataWithFile.append('email', formData.email);
        formDataWithFile.append('jobid', formData.jobid);
        formDataWithFile.append('password', password);
        if (formData.file) {
            formDataWithFile.append('file', formData.file);
        }
        axios.post('http://localhost:5000/api/register/user', formDataWithFile, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(response => {
                console.log('User registered successfully:', response.data);
                alert('User registered successfully!');
                window.location.href = '/';
            })
            .catch(error => {
                console.error('There was an error registering the user!', error);
            });
    };

    useEffect(() => {
        // Fetch job postings and users
        axios.get(`http://localhost:5000/api/jobs/${id}`)
            .then(response => setJob(response.data))
            .catch(error => console.error('Error fetching job postings:', error));
        
        // eslint-disable-next-line
    }, []);

    return (
        <div className="registration-page">
         
            <h1>Job Details:</h1>
            {job && (
                <ul>
                    <li>Position: {job.position}</li>
                    <li>Location: {job.location}</li>
                    <li>Department: {job.department}</li>
                    <li>Qualifications : {job.qualifications}</li>
                    <li>key Responsibiilities: {job.keyResponsibilities}</li>
                    <li>Application Deadline: {new Date(job.applicationDeadline).toLocaleDateString()}</li>
                    {/* <li>Salary: {job.salary}</li> */}
                </ul>
            )}
            <h2>by filling out the form you are applying for the job</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Phone:
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" value={generatePassword()} readOnly />
                </label>
                <input type="hidden" name="jobid" value={id} />
                <label>
                    cv and cover letter in PDF:
                    <input type="file" name="file" onChange={handleFileChange} />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    ); 
};

export default RegistrationPage;