import "../css/header.css"

import { Link } from 'react-router-dom';

export default function Header({sumPrice}) {
    return (
        <div className="header">
            <div className="container header-flex">
                <Link className="home-link" to="/">Home</Link>
                <Link className="basket-link" to="/basket">
                    <h4 className="basket-num">{sumPrice}$</h4>
                    <div className="basket-icon">
                        <img className="basket-img" alt="icon" src="./img/icon_basket.png" />
                    </div>
                </Link>
            </div>
        </div>
    )
}