import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [list, setList] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!list) {
      toast.error('Please input an item to be added');
      return;
    }
    addItem(list);
    setList('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>to-do list</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={list}
          onChange={(e) => setList(e.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;
