import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEmployeePage from '../pages/CreateEmployeePage';
import HomePage from '../pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create-employee' element={<CreateEmployeePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
