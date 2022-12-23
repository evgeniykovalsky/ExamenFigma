
import image25 from '../images/image25.png';
import korzina from '../images/korzina.png';
import enter from '../images/enter.png';
import lupa from '../images/lupa.png';
import { Link } from 'react-router-dom';

export default function CatalogCoffeHeader() {
    return (
        <>
            <div className="header_catalog">

                <img src={image25} alt="image25"></img>
                <div className='links'>
                    <div className='katalog'><Link to="/">Главная</Link></div>
                    <div className='katalog'><Link to="/catalogCoffe">Каталог товаров</Link></div>
                    <div className='blog'><Link to="/">Блог</Link></div>
                    <div className='kontacts'><Link to="/">Контакты</Link></div>

                </div>
                <div className="images">
                    <img src={lupa} alt="lupa"/>
                    <img src={korzina} alt="lupa"/>
                    <img src={enter} alt="lupa"/>
                </div>

            </div>
        </>
    );
}