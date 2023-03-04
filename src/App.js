import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Default from './component/Default';
import './App.css';

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Default />}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
