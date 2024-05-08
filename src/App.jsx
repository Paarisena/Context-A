import { useState } from 'react';
import "./App.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    
      {
          "id": 1,
          "title": `iPhone 14`,
          "description": "An apple mobile which is nothing like apple",
          "price": `549`,
          "discountPercentage": 12.96,
          "rating": 4.69,
          "quantity":0,
          "stock": 94,
          "brand": "Apple",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/1/1.jpg",
              "https://i.dummyjson.com/data/products/1/2.jpg",
              "https://i.dummyjson.com/data/products/1/3.jpg",
              "https://i.dummyjson.com/data/products/1/4.jpg",
              "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          ]
        }
  ]);

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id && item.quantity < item.stock) {
       item.quantity++;
       item.stock--;
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id && item.quantity > -0) {
        item.quantity--;
        item.stock++;
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <div className='div'>
      <h1 className='title'>Cart</h1>
      <table className='table'>
        <thead className='thead'>
          <tr className='tr'>
            <th className='th'></th>
            <th>Title</th>
            <th></th>
            <th></th>
            <th>Brand</th>
            <th></th>
            <th></th>
            <th>Price</th>
            <th></th>
            <th></th>
            <th>Quantity</th>
            <th></th>
            <th></th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr>
              <td className='td'></td>
              <td>{item.title}</td>
              <td></td>
              <td></td>
              <td>{item.brand}</td>
              <td></td>
              <td></td>
              <td>${item.price}</td>
              <td></td>
              <td></td>
              <td>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                {item.quantity}
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </td>
              <td></td>
              <td></td>
              <td>{item.stock}</td>
              </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Total Quantity: {getTotalQuantity()}</p>
        <p>Total Amount: ${getTotalAmount()}</p>
      </div>
      <div>
        <button onClick={SubmitEvent}>Buy</button>
      </div>
    </div>
  );
};

export default Cart;

