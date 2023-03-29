import React from 'react'
import './BasketHeader.css';

const BasketHeader = ({count}) => {
  return (
    <div className='BasketHeader'>
      <h2 className='BasketHeader_h2'>Ваша корзина</h2>
      <span className='BasketHeader_count'>{count}</span>
    </div>
  );
};

export default BasketHeader;
