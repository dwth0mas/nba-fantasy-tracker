import React from 'react';
import './DataTableStyle.css'

const TeamsTable = ({ teams }) => {
    return (
        <div className="DataTable">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Abbrevetion</th>
                        <th>City</th>
                        <th>Conference</th>
                        <th>Division</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => {
                        return (
                            <tr key={index}>
                                <td>{team.name}</td>
                                <td>{team.abbreviation}</td>
                                <td>{team.city}</td>
                                <td>{team.conference}</td>
                                <td>{team.division}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TeamsTable;