import React from 'react';
import './Basket.css';

import BasketHeader from "./BasketHeader";
import BasketItem from "./BasketItem";
import BasketPromoInfo from "./BasketPromoInfo";
import BasketTotal from "./BasketTotal";
import BasketPromoCode from "./BasketPromoCode";
import Button from "./Button";

import { themes, ThemeContext } from "../contexts/theme-context";


const Basket = ({ items, setItems, promoCode, setPromoCode }) => {

    const clickTopMenuHandler = (ev) => {
        document.getElementById('main_menu_home').click();
    }

    const countItemsInBasket = items.reduce(
        (acc, next) => acc + next.qty, 0
    )

    const amountTotal = items.reduce(
        (acc, next) => (acc + next.price * next.qty), 
        promoCode.length > 0 ? -500 : 0
    )

    return (
        <ThemeContext.Consumer>
            {({ theme, setTheme }) => {
                return (
                    <div>
                        <h1>Корзина</h1>
                        <div className={"Basket Basket-" + theme}>
                            <BasketHeader count={countItemsInBasket} />
                            <div className="Basket__items">
                                {items.map((item) => (
                                    <BasketItem {...item} key={item.uid} items={items} setItems={setItems} />
                                ))}
                                {promoCode.length > 0 ? <BasketPromoInfo code={promoCode} /> : null}
                                <BasketTotal value={amountTotal} currency={"₽"} />
                            </div>
                            <BasketPromoCode code={promoCode} setCode={setPromoCode} />
                            <Button
                                className="btn-proceed"
                                value="Продолжить покупку"
                                onClickHandler={clickTopMenuHandler}
                            />
                            <Button
                                value="Темная тема"
                                onClickHandler={() => setTheme(themes.dark)}
                            />
                            <Button
                                value="Светлая тема"
                                onClickHandler={() => setTheme(themes.light)}
                            />
                            <Button
                                value="Отладка"
                                onClickHandler={() => setTheme(themes.debug)}
                            />
                        </div>
                    </div>
                );
            }}
        </ThemeContext.Consumer>
    );
}

export default Basket;
