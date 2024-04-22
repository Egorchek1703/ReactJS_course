import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import NavigationContainer from './components/Navigation/NavigationContainer';
import Dialogs from './components/Dialogs/Dialogs';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { Routes, Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="app_wrapper">
      <Header />

      {
        // ПОМЕНЯЛ PROPS
      }
      <NavigationContainer store={props.store} />

      <main className='app_wrapper_content'>
        <Routes>
          {/* Profile */}
          <Route
            path="/profile" element={<Profile
              // Теперь раделение store можно осуществить внутри контейнерной компоненты, поэтому передаем store полностью
              // state={props.state.profilePage}
              // dispatch={props.dispatch}
              store={props.store}
            />}
          />

          {/* Dialogs */}
          <Route path="/dialogs" element={<Dialogs

            // ПОМЕНЯЛ PROPS
            store={props.store}

          />}
          />

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
