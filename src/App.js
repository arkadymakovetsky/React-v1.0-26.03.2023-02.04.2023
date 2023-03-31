
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';

import Clicker from './component/Clicker';
import Wrapper from './component/Wrapper';
import { themes, ThemeContext } from './contexts/theme-context'

import CatalogPage from './component/CatalogPage';
import About from './component/About';
import Basket from './component/Basket';
import Modal from './component/Modal';
import Button from './component/Button';


function App() {

  const [startItems, setStartItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState(themes.light);

  // Состояния для модального окна:
  // - флаг для отображения окна
  const [isShow, setIsShow] = useState(false);
  // - состояние хранящее данные ввода в <input />
  const [name, setName] = useState('Гость');

  const modal = <Modal
    title="Модальное окно"
    buttons={[
      <Button
        key="1"
        value="Закрыть"
        onClickHandler={() => setIsShow(false)}
      />,
      <Button
        key="2"
        value="Кнопка"
        onClickHandler={() => {alert(1)}}
      />
    ]}
  >
    <div>
      <p>Это диалоговое окно</p>
      <input
        value={name}
        onChange={ev => setName(ev.target.value)}
        className="Modal-input-text"
      />
    </div>
  </Modal>


  useEffect(() => {
    fetch("http://localhost:3000/items.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setStartItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  let basketPlace = null;

  if (error) {
    basketPlace = <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    basketPlace = <div>Загрузка...</div>;
  } else {
    basketPlace = <Basket items={startItems} />
  }

  basketPlace = <ThemeContext.Provider value={{ theme, setTheme }}>
    {basketPlace}
  </ThemeContext.Provider>

  return (
    <div className="App">
      <Wrapper color="green">
        <div>
          <Button
            value="Показать модальное окно"
            onClickHandler={() => setIsShow(true)}
          />
          <Clicker />
          <Clicker value={3} />
        </div>
      </Wrapper>

      {isShow ? modal : null}

      <Wrapper color="blue">
        <header className="App-header">
          <div>
            <BrowserRouter>
              <nav className="App-nav">
                <ul>
                  <li>
                    <Link to="/">Главная</Link>
                  </li>
                  <li>
                    <Link to="/basket">Корзина</Link>
                  </li>
                  <li>
                    <Link to="/about">О нас</Link>
                  </li>
                  <li>
                    <Link to="/react-router">О рутинге</Link>
                  </li>
                  <li>
                    <Link onClick={(ev) => {ev.preventDefault(); setIsShow(true)}}>{name}</Link>
                  </li>
                </ul>
              </nav>
              <Routes>
                <Route path="/" element={<CatalogPage basketItems={startItems}/>} />
                <Route path="/basket" element={basketPlace} />
                <Route path="/about" element={<About />} />
                <Route
                  path="/react-router"
                  element={
                    <div>
                      <h1>React Router</h1>
                      <div>
                        Тут можно прочитать о <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">React Router</a>
                      </div>
                    </div>
                  }
                />
              </Routes>
            </BrowserRouter>
          </div>
        </header>
      </Wrapper>
    </div>
  );

}

export default App;
