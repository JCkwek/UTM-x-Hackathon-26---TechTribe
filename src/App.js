import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ChallengeReward from './pages/ChallengeReward';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home />} /> 
          <Route path="challenges" element={<ChallengeReward />} />
          {/* <Route path="products" element={<Products />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
