import React from 'react'
import './ItemPrice.css';

const ItemPrice = ({ value, currency }) => {
    return (
        <div className='ItemPrice'>{value}{currency}</div>
    );
};

export default ItemPrice;
