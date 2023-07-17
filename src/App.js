import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Room from './pages/Room/index.js';
import Main from './pages/Main/index.js';
import NotFound404 from './pages/NotFound404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/room/:id' element={<Room />}/>
        <Route path='/' element={<Main />}/>
        <Route component={NotFound404}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
