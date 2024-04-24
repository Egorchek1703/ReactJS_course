import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import NavigationContainer from './components/Navigation/NavigationContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <NavigationContainer />

      <main className='app_wrapper_content'>
        <Routes>
          {/* Profile */}
          <Route path="/profile" element={<Profile />} />
          {/* Dialogs */}
          <Route path="/dialogs" element={<DialogsContainer />} />
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
