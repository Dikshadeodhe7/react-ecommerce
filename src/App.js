import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AddProduct from './components/product/AddProduct';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />

            <Routes>
                {/* <Route */}
                <Route exact path='/add-product' element={<AddProduct />}></Route>
                <Route exact path='/login' element={<Login />}></Route>
                <Route exact path='/register' element={<Register />}></Route>
            </Routes>
        
        </BrowserRouter>
        
        <h1>Ecommerce Website</h1>
    </div>
  );
}

export default App;
