import React, { useEffect } from 'react';
import DataTable from '../../components/DataTable/PlayersTable';
import useApi from '../../hooks/UseApi'
import playersService from '../../services/Players.service';

const Players = () => {
  const getPlayersService = useApi(playersService.getPlayers);

  useEffect(() => {
    getPlayersService.request();
    console.log(getPlayersService);
  }, []);


  return (
    <div
      style={{
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '20px'
      }}
    >
      <h1>Players Data</h1>
      {getPlayersService.loading && <p>Players are loading!</p>}
      {getPlayersService.error && <p>{getPlayersService.error}</p>}
      <DataTable players={getPlayersService.data ?? []}></DataTable>
    </div>
  );
};
  
export default Players;