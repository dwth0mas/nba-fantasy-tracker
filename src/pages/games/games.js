import React, { useEffect } from 'react';
import DataTable from '../../components/DataTable/PlayersTable';
import useApi from '../../hooks/UseApi'
import gamesService from '../../services/Games.service';
  
const Games = () => {
  const getGamesService = useApi(gamesService.getGames);

  useEffect(() => {
    getGamesService.request();
  }, []);

  console.log(getGamesService);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh'
      }}
    >
      <h1>Games Data</h1>
      {/* <DataTable players={getGamesService.data ?? []}></DataTable> */}
    </div>
  );
};
  
export default Games;