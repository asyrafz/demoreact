import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='container' style={{ width: 'calc(100vw - 40px)' }}>
        <Header />
        <div>asdas</div>
      </div>
    </div>
  );
}

export default App;
