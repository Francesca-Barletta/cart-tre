import Navbar from './components/Navbar';
import Cart from './components/Cart';
import TotalBox from './components/TotalBox';
import Loading from './components/Loading';
import { useGlobalContext } from './context/context';


function App() {
const {isLoading, products, total} = useGlobalContext();
if(isLoading){
  return(
    <div className='App'>
      <Navbar />
      <div className='d-flex justify-content-center align-items-center'>
        <Loading/>
      </div>
    </div>
  )
}
return (
  <div className='App'>
    <Navbar/>
    <div className='d-flex justify-content-center align-items-center'>
      {products.length > 0 ? (
        <Cart/>
      ) : (
        <h4>Non ci sono prodotti nel carrello</h4>
      )}
    </div>
      {total > 0 && <TotalBox/>}
  </div>
)
}

export default App;
