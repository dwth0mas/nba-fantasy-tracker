import React from 'react';
import './DataTableStyle.css'

const PlayersTable = ({ players }) => {
    return (
        <div className="DataTable">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Team</th>
                        <th>Height</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => {
                        return (
                            <tr key={index}>
                                <td>{player.first_name + ' ' + player.last_name}</td>
                                <td>{player.position}</td>
                                <td>{player.team.full_name}</td>
                                <td>{player.height_feet != null ? player.height_feet + "' " + player.height_inches + '"' : ''}</td>
                                <td>{player.weight_pounds}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default PlayersTable;