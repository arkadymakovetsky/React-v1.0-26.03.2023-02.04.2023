import React, { useContext } from "react";
import './BasketItem.css';

import ItemInfo from './ItemInfo'
import ItemPrice from './ItemPrice'
import Counter from './Counter'
import Button from './Button'

import { ThemeContext } from "../contexts/theme-context";


const BasketItem = ({ uid, title, description, price, qty, items, setItems }) => {

  const myContext = useContext(ThemeContext);
  const { theme } = myContext;

  const delBasketItem = (ev) => {
    const newItems = items.filter(item => item.uid !== uid)
    setItems(newItems);
  }

  return (
    <div className={"BasketItem BasketItem-" + theme}>
      <ItemInfo title={title} description={description} />
      <ItemPrice value={price} currency={'₽'} />
      <Counter value={qty} uid={uid} items={items} setItems={setItems} />
      <ItemPrice value={qty * price} currency={'₽'} />
      <div className="BasketItemDelete" >
        <Button value="Удалить" onClickHandler={delBasketItem} />
      </div>
    </div>
  );
};

export default BasketItem;
