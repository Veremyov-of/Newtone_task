//css
import '../css/fruitsCard.css';

export default function FruitsCard({info, addBasket}) {
    return(
        <div className="card">
           <div className="card-wrapp-img">
               <img className="card-img" alt="img" src={info.urlImg} />
           </div>
           <div className="card-wrapp-info">
               <h3 className="card-text">{info.name}</h3>
               <h4 className="card-text">(1kg)</h4>
           </div>
           <div className="card-wrapp-price_btn">
                <h5 className="card-price">{info.priceOne}$</h5>
                <button onClick={() => addBasket(info)} className="card-btn">add</button>
           </div>
        </div>
    )
}