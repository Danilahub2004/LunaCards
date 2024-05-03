import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './ItemForm.css';

const ItemForm = ({ onAddItem }) => {
  const { register, handleSubmit, reset } = useForm();
  const [cardNumber, setCardNumber] = useState('');
  const [cardMonth, setCardMonth] = useState('');
  const [cardDate, setCardDate] = useState('');
  const [cvc, setCvc] = useState('');

  const onSubmit = () => {
    const itemData = {
      cardNumber,
      cardMonth,
      cardDate,
      cvc,
    };
    onAddItem(itemData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-form">
      <div className="card-input">
        <label>Номер карты</label>
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      </div>
      <div className="card-input">
        <label>Месяц/число</label>
        <div className="date-input">
          <input type="text" value={cardMonth} onChange={(e) => setCardMonth(e.target.value)} />
          <input type="text" value={cardDate} onChange={(e) => setCardDate(e.target.value)} />
        </div>
      </div>
      <div className="card-input">
        <label>CVC код</label>
        <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} />
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default ItemForm;