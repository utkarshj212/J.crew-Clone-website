import './App.css';
import {Routes,Route} from "react-router-dom"
import Landing from './Pages/Landing/Landing';
import Women from './Pages/Products/Women';
import Men from './Pages/Products/Men';
import WomenDetails from './Pages/Products/WomenDetails';
import CartItem from './CartItem/CartItem';
import MenDetails from './Pages/Products/MenDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/women" element={<Women />}/>
        <Route path="/women/:id" element={<WomenDetails/>}/>
        <Route path="/men" element={<Men />}/>
        <Route path="/cart" element={<CartItem/>}/>
        <Route path="/men/:id" element={<MenDetails/>}/>
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
