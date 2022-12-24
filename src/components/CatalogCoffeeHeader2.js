import Tochka from "../images/Ellipse 19.png";
import cupOfCoffee from "../images/cupofcoffee.png";
import zerna from "../images/zerna3.png";
import {Link} from "react-router-dom";

export default function CatalogCoffeHeader2() {
    return (<>
        <div className="wrapper_coffee_header2">
            <div className="Navigation">
                <Link to="/">Главная</Link>
                <img src={Tochka} alt="tochka" />
                <Link to="/">Каталог товаров</Link>
                <img src={Tochka} alt="tochka" />
                <Link to="/">Свежеобжареный кофе</Link>

            </div>
            <div className="title">Свежеобжаренный кофе</div>
            <div className="imgCupCoffe">
                <img src={cupOfCoffee} alt="cup"/>
            </div>
            <div className="zernaCoffee">
                <img src={zerna} alt="zerna"/>
            </div>
            <div className="ellipse"></div>



        </div>

    </>);
}