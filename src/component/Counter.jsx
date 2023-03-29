import React from 'react'
import './Counter.css';

import Button from "./Button";

const Counter = ({ value, uid, items, setItems }) => {

    const qty = value;

    const qtyButtonAdd = () => {
        let newItems = items.slice();

        let index = newItems.findIndex(item => item.uid === uid)

        newItems[index].qty++;

        setItems(newItems);
    };

    const qtyButtonSub = () => {
        let newItems = items.slice();

        let index = newItems.findIndex(item => item.uid === uid)

        newItems[index].qty--;

        if (newItems[index].qty < 0 || isNaN(newItems[index].qty)) {
            newItems[index].qty = 0;
        }

        setItems(newItems);
    }

    const qtyInputChange = (ev) => {
        let newItems = items.slice();

        let index = newItems.findIndex(item => item.uid === uid)

        newItems[index].qty = parseInt(ev.target.value);

        if (newItems[index].qty < 0 || isNaN(newItems[index].qty)) {
            newItems[index].qty = 0;
        }

        setItems(newItems);
    }

    return (
        <div className="Counter">
            <div className="Counter_into">
                <Button value="-" onClickHandler={qtyButtonSub} />
                <input
                    className="Counter_input"
                    value={qty}
                    onChange={qtyInputChange}
                />
                <Button value="+" onClickHandler={qtyButtonAdd} />
            </div>
        </div>
    );
};

export default Counter;
