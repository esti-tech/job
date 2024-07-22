import React from 'react';

const UserTable = ({ users, jobs }) => {
    return (
        <table className="user-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Position Applied</th>
                    <th>File</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => {
                    const job = jobs.find(j => j.id === user.jobid);
                    return (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{job ? job.position : 'N/A'}</td>
                            <td>
                                <a href={user.fileURL} target="_blank" rel="noopener noreferrer">
                                    ⏭️
                                </a>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default UserTable;