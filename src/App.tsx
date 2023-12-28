import './App.css';
import { Categories } from './Question/Categories'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QuestionPage } from './Question/QuestionPage';

function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/question" element={<QuestionPage />} />
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
