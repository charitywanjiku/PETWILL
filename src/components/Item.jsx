import React, { useState, useEffect } from 'react';

const Item = () => {
  const [materials, setMaterials] = useState([]);
  const [newItem, setNewItem] = useState({
    material: '',
    price: '',
    quantity: '',
    stock_in: '',
    stock_out: '',
    avatar: '',
    
  });

  useEffect(() => {
    fetch(`http://localhost:3000/materials`)
      .then(response => response.json())
      .then(data => {
        setMaterials(data);
      })
      .catch(error => {
        console.error('Error fetching materials:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };
  

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItemWithAvatar = { ...newItem, avatar: "https://via.placeholder.com/150" };
    setMaterials([...materials, newItemWithAvatar]);
    setNewItem({
      material: '',
      price: '',
      quantity: '',
      stock_in: '',
      stock_out: '',
      avatar: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Construction Items</h1>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border border-gray-200">Avatar</th>
            <th className="py-2 px-4 border border-gray-200">Material</th>
            <th className="py-2 px-4 border border-gray-200">Price</th>
            <th className="py-2 px-4 border border-gray-200">Stock In</th>
            <th className="py-2 px-4 border border-gray-200">Quantity</th>
            <th className="py-2 px-4 border border-gray-200">Stock Out</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border border-gray-200">
                <img src={item.avatar} alt={item.material} className="w-10 h-10 rounded-full" />
              </td>
              <td className="py-2 px-4 border border-gray-200">{item.material}</td>
              <td className="py-2 px-4 border border-gray-200">{item.price}</td>
              <td className="py-2 px-4 border border-gray-200">{item.stock_in}</td>
              <td className="py-2 px-4 border border-gray-200">{item.quantity}</td>
              <td className="py-2 px-4 border border-gray-200">{item.stock_out}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form to add new item */}
      <form onSubmit={handleSubmit} className="mt-4">
        <input type="text" name="material" placeholder="Material" value={newItem.material} onChange={handleInputChange} className="px-4 py-2 border border-gray-200 rounded mr-2" />
        <input type="number" name="price" placeholder="Price" value={newItem.price} onChange={handleInputChange} className="px-4 py-2 border border-gray-200 rounded mr-2" />
        <input type="number" name="quantity" placeholder="Quantity" value={newItem.stock_in} onChange={handleInputChange} className="px-4 py-2 border border-gray-200 rounded mr-2" />
        <input type="number" name="stock_in" placeholder="Stock In" value={newItem.quantity} onChange={handleInputChange} className="px-4 py-2 border border-gray-200 rounded mr-2" />
        <input type="number" name="stock_out" placeholder="Stock Out" value={newItem.stock_out} onChange={handleInputChange} className="px-4 py-2 border border-gray-200 rounded mr-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Item</button>
      </form>
    </div>
  );
};

export default Item;

