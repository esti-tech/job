import React, { useState, useEffect } from 'react';

const UserTable = ( { users, jobs } ) =>
{
  const [ name, setName ] = useState( '' );
  const [ filteredUsers, setFilteredUsers ] = useState( users );

  const handleChange = ( e ) =>
  {
    setName( e.target.value );
  };

  useEffect( () =>
  {
    setFilteredUsers( users.filter( ( user ) => user.name.toLowerCase().includes( name.toLowerCase() ) ) );
  }, [ name, users ] );

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Number</th>
          <th>
            Name
            <br />
            <input
              type="text"
              value={ name }
              onChange={ handleChange }
            />
          </th>
          <th>Phone</th>
          <th>Email</th>
          <th>Position Applied</th>
          <th>File</th>
        </tr>
      </thead>
      <tbody>
        { filteredUsers.map( ( user, index ) =>
        {
          const job = jobs.find( ( j ) => j.id == user.jobId );
          return (
            <tr key={ user.id }>
              <td>{ index + 1 }</td>
              <td>{ user.name }</td>
              <td>{ user.phone }</td>
              <td>{ user.email }</td>
              <td>{ job?.title }</td>
              <td>
                <a
                  href={ "http://peepbackend.peep.et" + user.vacancyDocument }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ⏭️
                </a>
              </td>
            </tr>
          );
        } ) }
      </tbody>
    </table>
  );
};

export default UserTable;
