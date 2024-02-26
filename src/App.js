import NameIndex from './pages/NameIndex';
import NameCreate from './pages/NameCreate';
import NameEdit from './pages/NameEdit';
import NameDelete from './pages/NameDelete';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NameIndex />} />
        <Route path="/create" element={<NameCreate />} />
        <Route path="/edit/:id" element={<NameEdit />} />
        <Route path="/delete/:id" element={<NameDelete />} />
      </Routes>
    </>
  );
}

export default App;