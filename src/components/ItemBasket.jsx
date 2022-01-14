export default function ItemBasket({info}) {
    return(
        <div className="card-basket">
            <div className="card-basket-img">
                <img className="basket-img" alt="img" src={info.urlImg}/>
            </div>
            <div className="card-basket-wrapp">
                <h2 className="card-basket-name">{info.name}</h2>
                <div className="card-basket-container">
                    <button>-</button>
                    <input value={info.sum}/>
                    <button>+</button>
                    <div>kg</div>
                </div>
                <h3 className="card-basket-price">{info.price}$</h3>
            </div>
            <button className="card-basket-delBtn">
                <img className="card-basket-delImg" alt="icon-del" src="./img/icon-del.png" />
            </button>
        </div>
    )
}