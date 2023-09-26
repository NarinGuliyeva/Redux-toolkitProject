import './App.css';
import Navbar from './Component/Navbar';
import List from './Component/List';
import { useSelector ,useDispatch} from "react-redux"
import { useEffect } from 'react';
import { totalPrice } from './Component/Slice';

function App() {
  const {cartItems} = useSelector( (store) => store.cart )
  const dispatch = useDispatch()
  useEffect(  ()=> {
    dispatch(totalPrice())
  }   ,[cartItems]  )
  // cartItems deyeri her deyisdiyi zaman ,(quantity artib azalmasi) ,her defe useEffecti yeniden cagirib , yeniden render edir.
  return (
    <div className="App">
<Navbar/>
<List/>
    </div>
  );
}

export default App;
