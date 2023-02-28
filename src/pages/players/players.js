import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from '../../components/DataTable/index'

const Players = () => {

  const options = {
    method: 'GET',
    url: 'https://free-nba.p.rapidapi.com/players',
    params: {parge: '0', per_page: '100'},
    headers: {
      'X-RapidAPI-Key': '3c7f30daf9msh9ded06a73d473dfp192553jsnadc5c4f979b1',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  }

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const playerData = await axios.request(options);
        console.log(playerData.data.data);
        setPlayers(playerData.data.data);
      } catch (err) {
        console.error("Error getting player data: ", err);
      }
    })();
  }, []);

  console.log(players);

  return (
    <div
      style={{
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh'
      }}
    >
      <h1>Players Data</h1>
      <DataTable players={players}></DataTable>
    </div>
  );
};
  
export default Players;