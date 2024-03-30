import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
}

export default App;
