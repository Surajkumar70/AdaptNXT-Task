import logo from './logo.svg';
import './App.css';
import Dasboard from './components/Dasboard';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className=" parent-container">
        <Sidebar />
        <Dasboard />
      </div>
    </div>
  );
}


export default App;
