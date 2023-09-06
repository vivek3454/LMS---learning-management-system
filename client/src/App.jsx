import {Route,Routes} from 'react-router-dom';

import About from './Pages/About';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<About/>}/>

      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
