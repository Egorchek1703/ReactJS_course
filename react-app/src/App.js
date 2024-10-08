import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import NavigationContainer from './components/Navigation/NavigationContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="app_wrapper">
      <HeaderContainer />
      <NavigationContainer />

      <main className='app_wrapper_content'>
        <Routes>
          {/* Profile */}
          <Route path="/profile/:user_id?" element={<ProfileContainer />} />
          {/* Dialogs */}
          <Route path="/dialogs" element={<DialogsContainer />} />
          {/* Users */}
          <Route path="/users" element={<UsersContainer />} />
          {/* News */}
          <Route path="/news" element={<News />} />
          {/* Music */}
          <Route path="/music" element={<Music />} />
          {/* Settings */}
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
