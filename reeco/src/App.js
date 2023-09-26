import './App.css';
import Dashboard from './components/Dasboard';
import Header from './components/Header';
import OrderInfo from './components/OrderInfo';
import OrderStrip from './components/OrderStrip';

function App() {
  return (
    <div className="App">
      <Header />
      <OrderStrip />
      <OrderInfo />
     <Dashboard />
    </div>
  );
}

export default App;
