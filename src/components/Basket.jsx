//css
import "../css/basket.css";

//components
import ItemBasket from "./ItemBasket";

export default function Basket({basket, addBasket, reduceBasket, deleteItemBasket}) {
    
    return(
        <div className="container">
            { basket.length > 0 ?
                <div>
                    <h1 className="sumPrice">Order Price: {basket.sumPrice}$</h1>
                    <div className="wrapp_item">
                    { basket.map(item => 
                            <ItemBasket deleteItemBasket={deleteItemBasket} reduceBasket={reduceBasket} addBasket={addBasket} key={item.id} info={item} />
                            
                        )}
                    </div>
              </div>
            :
            <h2 className="Basket-empty">Basket is empty :(</h2>
            }
        </div>
    )
}