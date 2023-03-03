import React from 'react';
import './DataTableStyle.css'

const GamesTable = ({ games }) => {
    return (
        <div className="DataTable">
            <table>
                <thead>
                    <tr>
                        <th>Home Team</th>
                        <th>Home Score</th>
                        <th>Away Team</th>
                        <th>Away Score</th>
                        <th>OT</th>
                        <th>Season</th>
                    </tr>
                </thead>
                <tbody>
                    {games.map((game, index) => {
                        return (
                            <tr key={index}>
                                <td>{game.home_team.full_name}</td>
                                <td>{game.home_team_score}</td>
                                <td>{game.visitor_team.full_name}</td>
                                <td>{game.visitor_team_score}</td>
                                <td>{game.period != 4 ? "Yes" : "No"}</td>
                                <td>{game.season}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default GamesTable;