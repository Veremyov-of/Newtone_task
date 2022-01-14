import "../css/basket.css";
import ItemBasket from "./ItemBasket";

export default function Basket({basket}) {
    
    return(
        <div className="container">
            <h1 className="sumPrice">Order Price: {basket.sumPrice}$</h1>
            <div className="wrapp_item">
                {
                    basket.products.map(item => 
                        <ItemBasket key={item.id} info={item} />
                        
                    )
                }
            </div>
        </div>
    )
}