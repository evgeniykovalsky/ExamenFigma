import React from 'react';
import AllProduct from '../components/ProductDB';
import rightImg from '../images/Group 21.png';
import leftImg from '../images/Group 41.png';


import TovarDiscauntItem from './TovarDiscauntItem';





export default function TovarDiscaunt() {
    return (
        <div className="discauntWrapper">
            <div className="discauntTitle">Товары со скидкой</div>
            <div className="discauntDescription">Наша компания предлагает покупать товар со скидкой не только в дни распродаж или в течение действия ограниченных предложений, но и пользоваться скидками постоянно!</div>
            <div className="cardDiscaunt">
                <div className="letfImg">
                    <img src={leftImg} alt="leftImg" />
                </div>

{AllProduct.map((item,index)=><TovarDiscauntItem key={index} item={item}/>)} 
         
               

                <div className="rightImg">
                    <img src={rightImg} alt="rightImg" />
                </div>

            </div>
        </div>


    );
}