import './App.css';
import Navbar from './Components/Navbar';
import Front from './Components/Front';
import List from './Components/List';
import Allergy from './Components/Allergy';
import Options from './Components/Options';
import Blog from './Components/Blog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element=
            {<>
              <Front />
              <List />
              <Blog/>
              </>
              
            } />
          <Route exact path='/Allergy' element={<Allergy/>}/>
          <Route exact path='/Options' element={<Options/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
