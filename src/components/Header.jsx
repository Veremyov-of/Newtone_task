import { Link } from 'react-router-dom';

//css
import "../css/header.css"

export default function Header({basket}) {
    let sum = basket.reduce((a, b) => a + b.price, 0);
    return (
        <div className="header">
            <div className="container header-flex">
                <Link className="home-link" to="/">Home</Link>
                <Link className="basket-link" to="/basket">
                    <h4 className="basket-num">{basket.length !== 0 ? sum : 0}$</h4>
                    <div className="basket-icon">
                        <img className="basket-img" alt="icon" src="./img/icon_basket.png" />
                    </div>
                </Link>
            </div>
        </div>
    )
}