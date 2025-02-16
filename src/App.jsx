import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartMenu from '@/pages/StartMenu/StartMenu';
import QuestionPage from '@/pages/QuestionPage/QuestionPage';
import FinalPage from '@/pages/FinalPage/FinalPage';
import '@/styles/_app.scss';

function App() {
  return (
    <main className="app">
      <Router>
        <Routes>
          <Route path="/" element={<StartMenu />} />
          <Route path="/questions" element={<QuestionPage />} />
          <Route path="/final" element={<FinalPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
