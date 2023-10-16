import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEmployeePage from '../pages/CreateEmployeePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/create-employee' element={<CreateEmployeePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
