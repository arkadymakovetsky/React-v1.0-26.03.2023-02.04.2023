
import React, { useState, useEffect } from 'react';
import './App.css';
import Basket from './component/Basket';
// import Clicker from './component/Clicker';
// import Wrapper from './component/Wrapper';
import { themes, ThemeContext } from './contexts/theme-context'


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
        {/* <Wrapper> */}
        <h1>Корзина</h1>
        {/* </Wrapper> */}

        {/* <Clicker />
        <Clicker value={3}/> */}

        {/* <Wrapper color="green"> */}
        {basketPlace}
        {/* </Wrapper> */}
      </header>
    </div>
  );

}

export default App;
