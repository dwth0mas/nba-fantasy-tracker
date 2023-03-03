import React, { useEffect } from 'react';
import GamesTable from '../../components/DataTables/GamesTable';
import useApi from '../../hooks/UseApi'
import gamesService from '../../services/Games.service';
  
const Games = () => {
  const getGamesService = useApi(gamesService.getGames);

  useEffect(() => {
    getGamesService.request();
    console.log(getGamesService);
  }, []);

  return (
    <div className="table-page">
      <h1>Games Data</h1>
      <GamesTable games={getGamesService.data ?? []}></GamesTable>
    </div>
  );
};
  
export default Games;