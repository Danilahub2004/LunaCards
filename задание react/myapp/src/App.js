import React, { useState } from 'react';
import ItemList from './ItemList';
import ItemForm from './ItemForm';

const MyApp = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (itemData) => {
    setItems([...items, itemData]);
  };

  return (
    <div className="my-app">
      <ItemForm onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
};

export default MyApp;