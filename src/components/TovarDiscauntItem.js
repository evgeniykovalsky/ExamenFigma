import React, { useState, useContext, useEffect } from "react";
import { CoffeShopContext } from './Context';
import zerna from '../images/Group 175.png';




export default function TovarDiscauntItem({ item }) {

    const data = useContext(CoffeShopContext);



    const [vaga, setVaga] = useState(item.vaga[0]);
    const [price, setPrice] = useState(item.price[0]);
    useEffect(() => {
        const index = item.vaga.indexOf(Number(vaga));
        console.log(vaga);
        setPrice(item.price[index]);
    }, [vaga]);
    

    const options = item.vaga.map((text, index) => {
        return <option key={index}>{text}</option>
    });

    return (
        <>
            <div className="cardDiscauntItem">
                {item.discaunt &&<><div className='skidky'>%</div><div className='text'>Скидки</div></>}
               
               {!item.discaunt&&<> 
                <div className='text1'>{item.spesial}</div>
               <div className="select2">
                    <select id="mySelect" value={vaga} onChange={(event) => setVaga(event.target.value)}>
                        {options}
                    </select>
                </div>
                </>}
                {item.discaunt&&<> <div className="select1">
                    <select id="mySelect" value={vaga} onChange={(event) => setVaga(event.target.value)}>
                        {options}
                    </select>
                </div>
                </>}
                <div className="coffeDescription">
                    <div className="descImg">
                        <img src={item.photo} alt="" />
                    </div>
                    <div className='descText'>
                        <div className="grade">
                            <div className="star">{data.grade(item)}</div>
                            <div className='gradetext'><span>{item.grade}.0 </span>(32 отзыва)</div>
                           <div className='objarka'> {data.objarka(item)}</div>
                        </div>
                        <div className='kislinka'>
                            <div className="parametr"> Кислинка</div>

                            {data.kislinka(item)}
                        </div>
                        <div className='gorchinka'>
                            <div className="parametr">Горчинка</div>
                            {data.gorchinka(item)}
                        </div>
                        <div className='nasishenost'>
                            <div className="parametr">Насыщенность</div>
                            {data.nasishenost(item)}
                        </div>

                    </div>

                </div>
                <div className='cardFooter'>
                    <div className='title'>{item.title}</div>
                    <div className='description'>{item.description}</div>
                    <div className='oldPrice'>{price + 100}</div>
                    <div className='newPrice'>{price}</div>
                    <div className='buttonKoshik'><p>В корзину</p></div>
                </div>


            </div>
        </>


    );
}