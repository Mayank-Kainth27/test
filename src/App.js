import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Routing from './routing';
// import Login from './screens/login';
// import Home from './screens/home';
// import Error from './screens/error';

function App() {
  return ( 
    <div className="App">
      <Routing />
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login/>} />
          <Route path='*' element={<Error />}/>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
