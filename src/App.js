import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Players from './pages/players/players';
import Teams from './pages/teams';
import Games from './pages/games/games';

const App = () => {
  return (
    <View className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/players' element={<Players />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/games' element={<Games />} />
        </Routes>
      </Router>
     </View>
  );
};

export default withAuthenticator(App);