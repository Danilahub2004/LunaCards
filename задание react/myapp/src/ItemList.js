import React from 'react';
import { useForm } from 'react-hook-form';
import './ItemList.css';

const ItemList = ({ items }) => {
  const { register } = useForm();

  return (
    <div className="item-list">
      <table>
        <thead>
          <tr>
            <th>Номер карты</th>
            <th>Месяц и число</th>
            <th>CVC код</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.cardNumber}</td>
              <td>
                {item.cardMonth} {item.cardDate}
              </td>
              <td className="cvv-value"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;