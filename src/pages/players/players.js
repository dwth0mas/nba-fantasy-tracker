import React, { useEffect } from 'react';
import PlayersTable from '../../components/DataTables/PlayersTable';
import useApi from '../../hooks/UseApi'
import playersService from '../../services/Players.service';

const Players = () => {
  const getPlayersService = useApi(playersService.getPlayers);

  useEffect(() => {
    getPlayersService.request();
    console.log(getPlayersService);
  }, []);


  return (
    <div className="table-page">
      <h1>Players Data</h1>
      {getPlayersService.loading && <p>Players are loading!</p>}
      {getPlayersService.error && <p>{getPlayersService.error}</p>}
      <PlayersTable players={getPlayersService.data ?? []}></PlayersTable>
    </div>
  );
};
  
export default Players;