import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import LoginPage from './pages/LoginPage';
import CoursePage from './pages/CoursePage';
import ModulesPage from './pages/ModulesPage';
import './App.css';

function App() {
return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/modules" element={<ModulesPage />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
