import {Route,Routes} from 'react-router-dom';

import About from './Pages/About';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import SignUp from './Pages/SignUp';
import CourseList from './Pages/Course/CourseList';
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<About/>}/>

      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>

      <Route path="/courses" element={<CourseList/>}/>

      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
