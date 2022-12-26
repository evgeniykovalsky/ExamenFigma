import { useContext, useEffect, useState } from "react";
import { CoffeShopContext } from './Context';
import line from '../images/Rectangle 35.png';
import turka from "../images/turka.png";
import Fpress from "../images/Fpress.png";
import Moka from "../images/moka.png";
import Espreso from "../images/espreso.png";
import Voronka from "../images/voronka.png";
import Aeropress from "../images/aeropress.png";
import cupFilter from "../images/cupFilter.png";
import avtomat from "../images/avtomat.png";
import bigLine from "../images/Rectangle 37.png";
import CatalogCoffeeResult from "../components/CatalogCoffeeResult";
import CatalogProduct from "../components/ProductCatalogDB"
import imageLogo from '../images/image25.png';


export default function CatalogCoffeeFilter() {
    const data = useContext(CoffeShopContext);
    const[rezultFilter,setResultFilter]=useState(CatalogProduct);

    useEffect(()=>{
        
    })
   



    return (
        <>
        <div className="filters">
            <div className="firstRow">
                <div className="stepen_objarki">
                    <div className="title">Степень обжарки</div>
                    <div className="right_line">
                        <img src={line} alt="line" />
                    </div>
                    <div className="radioButton" onChange={(event) => data.setObjarka(event.target.value)}>
                        <div className="ObjZerna"> <input id="objarka5" type="radio" value="5" name="objarka" /><label for="objarka5"> {data.objarkaImg(5)}</label></div>
                        <div className="ObjZerna"> <input id="objarka4" type="radio" value="4" name="objarka" /><label for="objarka4"> {data.objarkaImg(4)}</label></div>
                        <div className="ObjZerna"> <input id="objarka3" type="radio" value="3" name="objarka" /><label for="objarka3"> {data.objarkaImg(3)}</label></div>
                        <div className="ObjZerna"> <input id="objarka2" type="radio" value="2" name="objarka" /><label for="objarka2"> {data.objarkaImg(2)}</label></div>
                        <div className="ObjZerna"> <input id="objarka1" type="radio" value="1" name="objarka" /><label for="objarka1"> {data.objarkaImg(1)}</label></div>
                    </div>

                </div>
                <div className="parameterCoffe">
                 <div className="bigLine"> <img src={bigLine} alt="bigLine"/></div>
                    <div className="parameterCoffeRadio">
                        <div className="geografia" onChange={(event) => data.setGeografia(event.target.value)}>

                            <div className="title">География</div>
                            <div className="radoText"><input id="af" type="radio" value="Африка" name="geografia" /><label for="af">Африка</label></div>
                            <div className="radoText"><input id="im" type="radio" value="Йемен" name="geografia" /><label for="im">Йемен</label></div>
                            <div className="radoText"><input id="yg" type="radio" value="Уганда" name="geografia" /><label for="yg">Уганда</label></div>
                            <div className="radoText"><input id="op" type="radio" value="Эфиопия" name="geografia" /><label for="op">Эфиопия</label></div>
                            <div className="radoText"><input id="az" type="radio" value="Азия" name="geografia" /><label for="az">Азия</label></div>
                            <div className="radoText"><input id="amer" type="radio" value="Центр. Америка" name="geografia" /><label for="amer">Центр. Америка</label></div>
                            <div className="radoText"><input id="lat" type="radio" value="Лат. Америка" name="geografia" /><label for="lat">Лат. Америка</label></div>
                        </div>
                        <div className="twins">
                            <div className="kislinkq" onChange={(event) => data.setKislinkaF(event.target.value)}>
                                <div className="title">Кислинка</div>
                                <div className="radoText"><input id="1" type="radio" value="Низкая" name="kislinka" /><label for="1">Низкая</label></div>
                                <div className="radoText"><input id="2" type="radio" value="Средняя" name="kislinka" /><label for="2">Средняя</label></div>
                                <div className="radoText"><input id="3" type="radio" value="Высокая" name="kislinka" /><label for="3">Высокая</label></div>
                            </div>
                            <div className="processing_method" onChange={(event) => data.setProcessingMetod(event.target.value)}>
                                <div className="title2">Способ обработки</div>
                                <div className="radoText"><input id="11" type="radio" value="Сухая" name="processing" /><label for="11">Сухая</label></div>
                                <div className="radoText"><input id="22" type="radio" value="Мытая" name="processing" /><label for="22">Мытая</label></div>
                                <div className="radoText"><input id="33" type="radio" value="Прочие" name="processing" /><label for="33">Прочие</label></div>
                            </div>

                        </div>

                        <div className="spesial" onChange={(event) => data.setSpecial(event.target.value)}>
                            <div className="title">Особые</div>
                            <div className="radoText"><input id="111" type="radio" value="Популярное" name="special" /><label for="111">Популярное</label></div>
                            <div className="radoText"><input id="222" type="radio" value="Новый урожай" name="special" /><label for="222">Новый урожай</label></div>
                            <div className="radoText"><input id="333" type="radio" value="Ваш выбор" name="special" /><label for="333">Ваш выбор</label></div>
                            <div className="radoText"><input id="444" type="radio" value="Микролот" name="special" /><label for="444">Микролот</label></div>
                            <div className="radoText"><input id="555" type="radio" value="Сорт недели" name="special" /><label for="555">Сорт недели</label></div>
                            <div className="radoText"><input id="888" type="radio" value="Скидки" name="special" /><label for="888">Скидки</label></div>
                            <div className="radoText"><input id="777" type="radio" value="Новинка" name="special" /><label for="777">Новинка</label></div>


                        </div>
                        <div className="vid_coffee" onChange={(event) => data.setVid_coffee(event.target.value)}>
                            <div className="title">Вид кофе</div>
                            <div className="radoText"><input id="1111" type="radio" value="Арабика" name="vidCoffee" /><label for="1111">Арабика</label></div>
                            <div className="radoText"><input id="2222" type="radio" value="Робуста" name="vidCoffee" /><label for="2222">Робуста</label></div>
                            <div className="radoText"><input id="3333" type="radio" value="Смесь Арабик" name="vidCoffee" /><label for="3333">Смесь Арабик</label></div>
                            <div className="radoText"><input id="4444" type="radio" value="Смесь арабика/робуста" name="vidCoffee" /><label for="4444">Смесь арабика/робуста</label></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="iconsFilter">
                <div className="iconsFilterItem" onClick={()=>data.setPribor("Turka")}>
                    <div className="title">Турка</div>
                    <div className="filterImg">
                        <img src={turka} alt="turka" />
                    </div>
                </div>
                <div className="iconsFilterItem" onClick={()=>data.setPribor("Press")}>
                    <div className="title">Френч-пресс</div>
                    <div className="filterImg">
                        <img src={Fpress} alt="fpress" />
                    </div>
                </div>
                <div className="iconsFilterItem" onClick={()=>data.setPribor("Moka")}>
                    <div className="title">Мока</div>
                    <div className="filterImg">
                        <img src={Moka} alt="moka" />
                    </div>
                </div>
                <div className="iconsFilterItem" onClick={()=>data.setPribor("Espresso")}>
                    <div className="title">Эспрессо</div>
                    <div className="filterImg">
                        <img src={Espreso} alt="espreso" />
                    </div>
                </div>
                <div className="iconsFilterItem" onClick={()=>data.setPribor("Voronka")}>
                    <div className="title">Воронка</div>
                    <div className="filterImg">
                        <img src={Voronka} alt="voronka" />
                    </div>
                </div>
                <div className="iconsFilterItem" onClick={()=>data.setPribor("Aeropress")}>
                    <div className="title">Аэропресс</div>
                    <div className="filterImg">
                        <img src={Aeropress} alt="apress" />
                    </div>
                </div>
                <div className="iconsFilterItem" onClick={()=>data.setPribor("cup")}>
                    <div className="title">Чашка</div>
                    <div className="filterImg">
                        <img src={cupFilter} alt="cup" />
                    </div>
                </div>
                <div className="iconsFilterItem" onClick={()=>data.setPribor("Avtomat")}>
                    <div className="title">Автомат</div>
                    <div className="filterImg">
                        <img src={avtomat} alt="avtomat" />
                    </div>
                </div>
            </div>

        </div>
        <div className="filterRezult">
        <CatalogCoffeeResult  item={rezultFilter}/>
        <div className="footerWpapper1">
          
          <img src={imageLogo} alt="image25"></img>
          <div className='links'>
          <div className='katalog'>Каталог товаров</div>
          <div className='blog'>Блог</div>
          <div className='kontacts'>Контакты</div>
          
          </div>

      </div>
        </div>
       
        </>
    );
}