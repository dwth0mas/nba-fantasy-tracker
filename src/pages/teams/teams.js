import React, { useEffect } from 'react';
import TeamsTable from '../../components/DataTables/TeamsTable';
import useApi from '../../hooks/UseApi'
import teamsService from '../../services/Teams.service';
  
const Teams = () => {
  const getTeamsService = useApi(teamsService.getTeams);

  useEffect(() => {
    getTeamsService.request();
    console.log(getTeamsService);
  }, []);

  return (
    <div className="table-page">
      <h1>Teams Data</h1>
      {getTeamsService.loading && <p>Teams are loading!</p>}
      {getTeamsService.error && <p>{getTeamsService.error}</p>}
      <TeamsTable teams={getTeamsService.data ?? []}></TeamsTable>
    </div>
  );
};
  
export default Teams;