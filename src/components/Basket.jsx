//css
import "../css/basket.css";

//components
import ItemBasket from "./ItemBasket";

export default function Basket({basket, deleteBasket, inputChange, addKgBtn, reduceKgBtn}) {
    
    return(
        <div className="container">
            { basket.products.length > 0 ?
                <div>
                    <h1 className="sumPrice">Order Price: {basket.sumPrice}$</h1>
                    <div className="wrapp_item">
                    { basket.products.map(item => 
                            <ItemBasket reduceKgBtn={reduceKgBtn} addKgBtn={addKgBtn} inputChange={inputChange} deleteBasket={deleteBasket} key={item.id} info={item} />
                            
                        )}
                    </div>
              </div>
            :
            <h2 className="Basket-empty">Basket is empty :(</h2>
            }
        </div>
    )
}