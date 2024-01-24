import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Items from './Items';
import { ToastContainer, toast } from 'react-toastify';

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('list') || '[]')
  );

  const addItem = (listItem) => {
    const newItems = {
      name: listItem,
      completed: false,
      id: nanoid(),
    };
    const newItem = [...items, newItems];
    setItems(newItem);
    setLocalStorage(newItem);
    toast.success('Item added successfully');
  };
  // console.log(typeof items);

  const removeItem = (itemId) => {
    const delItems = items.filter((item) => item.id !== itemId);
    setItems(delItems);
    setLocalStorage(delItems);
    toast.success('Item successfully deleted');
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item has been successfully completed');
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
