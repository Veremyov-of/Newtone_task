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
    { id: 1, name: 'Bananas', price: 10, sum: 1, urlImg: './img/bananas.png', priceOne: 10 },
    { id: 2, name: 'Apples', price: 8, sum: 1, urlImg: './img/apple.png', priceOne: 8 },
    { id: 3, name: 'Papayas', price: 10, sum: 1, urlImg: './img/papayas.png', priceOne: 10, discount: true},
  ]);


  function discountBtns(index, state) {
    let newState = {...state};
    newState.products = [...state.products];
    let num = Math.floor(newState.products[index].sum / 3);
    if(num > 0) {
      num *= 5;
      newState.sumPrice -= newState.products[index].price
      newState.products[index].price = newState.products[index].price - num;
      newState.sumPrice += newState.products[index].price;
      setBasket({...newState});
    }
  }


  function discountAdd(index, state) {
    let newState = {...state};
    newState.products = [...state.products];
    if(newState.products[index].sum % 3 === 0) {
      newState.products[index].price -= 5;
      newState.sumPrice -= 5;
      setBasket({...newState});
    }
  }

  function discountInput(value, state, index) {
    let newState = {...state};
    newState.products = [...state.products];
    let num = Math.floor(value / 3);
    if(num > 0) {
      num *= 5;
      newState.sumPrice -= newState.products[index].price
      newState.products[index].price = newState.products[index].price - num;
      newState.sumPrice += newState.products[index].price;
      setBasket({...newState});
    }
  }


  function addBasket(product) {
    let newBasket = {...basket};
    newBasket.products = [...basket.products];
    let index = newBasket.products.findIndex(item => item.id === product.id);
    if(index === -1) {
      newBasket.products.push({...product});
      newBasket.sumPrice += product.price;
      setBasket({...newBasket});
    } else {
      newBasket.products[index].sum += product.sum;
      newBasket.products[index].price += product.price;
      newBasket.sumPrice += product.price;
      setBasket({...newBasket});
      if(product.discount) discountAdd(index, newBasket);
    }
    
    
  }

  function deleteBasket(product) {
    let newBasket = {...basket};
    newBasket.products = [...basket.products];
    let index = newBasket.products.findIndex(item => item.id === product.id);
    newBasket.products.splice(index, 1);
    newBasket.sumPrice -= product.price;
    setBasket({...newBasket});
  }

  function inputChange(value, id) {
    if(value < 0) return
    let newBasket = {...basket};
    newBasket.products = [...basket.products];

    let index = newBasket.products.findIndex(item => item.id === id);
    newBasket.products[index].sum = value;
    newBasket.sumPrice -= newBasket.products[index].price;
    newBasket.products[index].price = value * newBasket.products[index].priceOne;
    newBasket.sumPrice += newBasket.products[index].price;
    setBasket({...newBasket});
    if(newBasket.products[index].discount) {
      discountInput(value, newBasket, index);
    }
  }

  function addKgBtn(id) {
    let newBasket = {...basket};
    newBasket.products = [...basket.products];

    let index = newBasket.products.findIndex(item => item.id === id);
    
      newBasket.products[index].sum++;
      newBasket.sumPrice -= newBasket.products[index].price;
      newBasket.products[index].price = newBasket.products[index].priceOne *  newBasket.products[index].sum;
      newBasket.sumPrice += newBasket.products[index].price;
      setBasket({...newBasket});
      if(newBasket.products[index].discount) 
        discountBtns(index, newBasket);
  }

  function reduceKgBtn(id) {
    let newBasket = {...basket};
    newBasket.products = [...basket.products];

    let index = newBasket.products.findIndex(item => item.id === id);
    newBasket.products[index].sum--;
    newBasket.sumPrice -= newBasket.products[index].price;
    newBasket.products[index].price = newBasket.products[index].priceOne *  newBasket.products[index].sum;
    newBasket.sumPrice += newBasket.products[index].price;
    setBasket({...newBasket});
    if(newBasket.products[index].discount) 
      discountBtns(index, newBasket);
  }

  return (
    <Router basename='/Newtone_task'>
      <Header sumPrice={basket.sumPrice}/>
      <Switch>
        <Route exact path='/'>
          <Home addBasket={addBasket} fruits={fruits} />
        </Route>
        <Route path='/basket'>
          <Basket reduceKgBtn={reduceKgBtn} addKgBtn={addKgBtn} inputChange={inputChange} deleteBasket={deleteBasket} basket={basket}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
