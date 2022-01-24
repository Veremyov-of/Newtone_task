import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//css
import "./css/global.css";

//components
import Home from './components/Home';
import Header from './components/Header';
import Basket from './components/Basket';

function App() {

  let [basket, setBasket] = useState([])

  let [fruits, setFruits] = useState([
    { id: 1, name: 'Bananas', price: 10, sum: 1, urlImg: './img/bananas.png', priceOne: 10 },
    { id: 2, name: 'Apples', price: 8, sum: 1, urlImg: './img/apple.png', priceOne: 8 },
    { id: 3, name: 'Papayas', price: 10, sum: 1, urlImg: './img/papayas.png', priceOne: 10, discount: true, discountNum: 0},
  ]);

  function createNewState(id) {
    const newBasket = [...basket];
    const index = newBasket.findIndex(item => item.id === id);
    return { newBasket, index };
  }

  function addBasket(product, sum = 1) {
    const { newBasket, index } = createNewState(product.id);

    if(index === -1) {
      newBasket.push({...product});
      return setBasket([...newBasket]);
    }

    if(typeof sum === 'string') {
      if(sum < 0) return;
      newBasket[index].sum = +sum;
      newBasket[index].price = sum * newBasket[index].priceOne;
    } else {
      newBasket[index].sum += 1;
      newBasket[index].price += newBasket[index].priceOne;
    }

    if(newBasket[index].discount) discount(newBasket[index]);
      

    setBasket([...newBasket]);
  }

  function reduceBasket(product) {
    const {newBasket, index} = createNewState(product.id);
    if(newBasket[index].sum <= 0) return;
    newBasket[index].price -= newBasket[index].priceOne;
    newBasket[index].sum -= 1;
    if(newBasket[index].discount) discount(newBasket[index]);
    setBasket([...newBasket]);
  }

  function deleteItemBasket(product) {
    const {newBasket, index} = createNewState(product.id);
    newBasket.splice(index, 1);
    setBasket([...newBasket]);
  }

  function discount(product) {
    product.price = ( product.sum * product.priceOne ) - ( 5 * Math.floor( product.sum / 3 ) ); 
  }

  return (
    <Router basename='/Newtone_task'>
      <Header basket={basket}/>
      <Switch>
        <Route exact path='/'>
          <Home addBasket={addBasket} fruits={fruits} />
        </Route>
        <Route path='/basket'>
          <Basket deleteItemBasket={deleteItemBasket} reduceBasket={reduceBasket} addBasket={addBasket} basket={basket} /> 
        </Route>
      </Switch>
    </Router>
  );
}

export default App;