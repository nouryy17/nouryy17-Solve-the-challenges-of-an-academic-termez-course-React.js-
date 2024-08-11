import { useState } from 'react';

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

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
     setProducts(products.map(prod => 
      prod.id === productId 
        ? { ...prod, count: prod.count + 1 } 
        : prod
    ))
  
    
  }
  function Minus(productId) {
    setProducts(products.map(prod => 
     prod.id === productId 
       ? { ...prod, count: prod.count - 1 } 
       : prod
   ))
 
   
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
          <button style={{marginLeft:"5px",width:" 22px"}} onClick={() => {
            Minus(product.id);
          }}>
            -
          </button>
        </li>
      ))}
    </ul>
  );
}
