import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '@/pages/Home/Home';
import Quiz from '@/pages/Quiz/Quiz';
import Result from '@/pages/Result/Result';

function App() {
  return (
    <main className="app">
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/:category" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Router>
      </div>
    </main>
  );
}

export default App;
