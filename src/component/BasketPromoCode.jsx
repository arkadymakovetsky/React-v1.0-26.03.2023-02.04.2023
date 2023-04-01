import React from 'react'
import './BasketPromoCode.css';

import Button from './Button'

const BasketPromoCode = ({ code, setCode }) => {
    return (
        <div className='BasketPromoCode'>
            <input
                className='BasketPromoCode_input'
                placeholder='Промокод / Пробел (для удаления)'
            />
            <Button
                value='Применить'
                onClickHandler={(ev) => {
                    const element = document.querySelector(".BasketPromoCode .BasketPromoCode_input");
                    if (element !== null) {
                        let codeValue = element.value.trim().split(' ')[0].toUpperCase();
                        if (element.value.length > 0 && codeValue === 'REACTSPECIALIST') {
                            setCode(codeValue);
                        } else if (element.value.length > 0 && codeValue === '') {
                            setCode('');
                        }
                        element.value = '';
                    }
                }}
            />
        </div>
    );
};

export default BasketPromoCode;
