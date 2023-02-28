import React from 'react';
import './DataTableStyle.css'

const DataTable = (props) => {
    return (
        <div className="DataTable">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Team</th>
                    <th>Height</th>
                    <th>Weight</th>
                </tr>
                {props.players.map((player, index) => {
                    return (
                        <tr key={index}>
                            <td>{player.first_name + player.last_name}</td>
                            <td>{player.position}</td>
                            <td>{player.team.full_name}</td>
                            <td>{player.height_feet = "' " + player.height_inches + '"'}</td>
                            <td>{player.weight_pounds}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default DataTable;