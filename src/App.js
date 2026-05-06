import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ChallengeReward from './pages/ChallengeReward';
import './App.css';
import FinancialAdvice from './pages/FinancialAdvice';
import Savings from './pages/Savings';
import Scanning from './pages/Scanning';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home />} /> 
          <Route path="/financial_advice" element={<FinancialAdvice />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="challenges" element={<ChallengeReward />} />
          <Route path="scanning" element={<Scanning />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
