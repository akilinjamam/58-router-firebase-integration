import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Products from './Component/Products/Products';
import Order from './Component/Order/Order';
import RequireAuth from './Component/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>

        }></Route>
      </Routes>
    </div>
  );
}

export default App;
