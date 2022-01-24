//css
import "../css/itemBasket.css";

export default function ItemBasket({info, addBasket, reduceBasket, deleteItemBasket}) {
    return(
        <div className="card-basket">
            <div className="card-basket-img">
                <img className="basket-img" alt="img" src={info.urlImg}/>
            </div>
            <div className="card-basket-wrapp">
                <h2 className="card-basket-name">{info.name}</h2>
                <div className="card-basket-container">
                    <button onClick={() => reduceBasket(info)} className="card-basket-btn">-</button>
                    <input type="number" onChange={(event) => addBasket(info, event.target.value)} className="card-basket-input" value={info.sum}/>
                    <button onClick={() => addBasket(info)} className="card-basket-btn">+</button>
                    <div className="card-basket-kg">kg</div>
                </div>
                <h3 className="card-basket-price">{info.price}$</h3>
            </div>
            <button onClick={() => deleteItemBasket(info)} className="card-basket-delBtn">
                <img className="card-basket-delImg" alt="icon-del" src="./img/icon-del.png" />
            </button>
        </div>
    )
}