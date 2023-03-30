
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';

// import Clicker from './component/Clicker';
// import Wrapper from './component/Wrapper';
import { themes, ThemeContext } from './contexts/theme-context'

import CatalogPage from './component/CatalogPage';
import About from './component/About';
import Basket from './component/Basket';


function App() {

  const [startItems, setStartItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState(themes.light);


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
      <header className="App-header">
        {/* <Clicker />
        <Clicker value={3}/> */}

        {/* <Wrapper color="green"> */}
        {/* {basketPlace} */}
        {/* </Wrapper> */}

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
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<CatalogPage />} />
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
    </div>
  );

}

export default App;
