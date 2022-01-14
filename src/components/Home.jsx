//css
import '../css/home.css'


//components
import FruitsCard from "./FruitsCard";


export default function Home({ fruits, addBasket }) {
    return (
        <div className='home container'>
            { fruits.map(item => 
                <FruitsCard addBasket={addBasket} key={item.id} info={item}/>    
            )}
        </div>
    )
}