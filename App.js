import React from 'react';
import { BrowserRouter as  Router, Routes ,Route} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import EnglishQuiz from './components/EnglishQuiz';
import GrammarQuiz from './components/Grammar'
import NQuiz from './components/NounMcq'
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/english-quiz" element={<EnglishQuiz />} />
        <Route path="/grammar" element={<GrammarQuiz />} />
        <Route path="/nouns" element={<NQuiz />} />
      
       
       
      </Routes>
    </Router>
  );
}

export default App;

