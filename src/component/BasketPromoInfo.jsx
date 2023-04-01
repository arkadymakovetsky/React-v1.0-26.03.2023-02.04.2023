import React from 'react'
import './BasketPromoInfo.css';

import ItemPrice from './ItemPrice'

const BasketPromoInfo = ({ code }) => {
    const promoValue = code.length > 0 ? -500 : 0;

    return (
        <div className="BasketPromoInfo">
            <div className='BasketPromoInfo_main'>
                <h3 className="BasketPromoInfo_title">Промокод</h3>
                <p className="BasketPromoInfo_description">{code}</p>
            </div>
            <div className='BasketPromoInfo_price'>
                <ItemPrice value={promoValue} currency={'₽'} />
            </div>
        </div>
    );
};

export default BasketPromoInfo;
