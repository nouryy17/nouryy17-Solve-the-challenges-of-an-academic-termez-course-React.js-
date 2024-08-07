import './App.css';
import { useState } from 'react';

function App() {
 const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];
 function ShoppingCart() {
    const [
      products,
      setProducts
    ] = useState(initialProducts)
  
    function handleIncreaseClick(productId) {
  
    }
  
    return (
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}
            {' '}
            (<b>{product.count}</b>)
            <button onClick={() => {
              handleIncreaseClick(product.id);
            }}>
              +
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
ShoppingCart()
export default App;
