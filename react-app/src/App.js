import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navigation from './components/Navigation/Navigation';
import Dialogs from './components/Dialogs/Dialogs';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navigation />
        <main className='app_wrapper_content'>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<Dialogs />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
