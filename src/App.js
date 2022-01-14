import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//css
import "./css/global.css";

//components
import Home from './components/Home';
import Header from './components/Header';
import Basket from './components/Basket';

function App() {

  let [basket, setBasket] = useState({
    products: [],
    sumPrice: 0,
  })

  let [fruits, setFruits] = useState([
    { id: 1, name: 'Bananas', price: 10, sum: 1, urlImg: './img/bananas.png' },
    { id: 2, name: 'Apples', price: 8, sum: 1, urlImg: './img/apple.png' },
    { id: 3, name: 'Papayas', price: 10, sum: 1, urlImg: './img/papayas.png' },
  ]);

  function addBasket(product) {
    let newBasket = { ...basket };
    if(newBasket.products.includes(product)) {
      let index = newBasket.products.indexOf(product);
      newBasket.products[index].sum ++;
      newBasket.products[index].price += product.price;
      newBasket.sumPrice += product.price;
      setBasket({ ...newBasket })
    } else {
      newBasket.products.push(product);
      newBasket.sumPrice += product.price;
      setBasket({ ...newBasket })
    }
    
  }

  return (
    <Router>
      <Header sumPrice={basket.sumPrice}/>
      <Switch>
        <Route exact path='/'>
          <Home addBasket={addBasket} fruits={fruits} />
        </Route>
        <Route path='/basket'>
          <Basket basket={basket}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
