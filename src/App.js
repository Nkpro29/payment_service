import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import WalletPage from './pages/WalletPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/wallet" element={<WalletPage />} />
      </Routes>
    </>
  );
}

export default App;
