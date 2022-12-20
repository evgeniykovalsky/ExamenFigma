import React from "react";
import imageCup from '../images/cupofcoffee.png';
import zernaCoffee from '../images/zernacoffee.png';
import ellipseBlack from '../images/elipseBlack.png';
import ellipseEmpty from '../images/ellipseEmpty.png';

export default function KaruselItem(){
    return(
        
    <div className="wrapperKarusel">
        <div className="description">
           <div className="smagCoffee">Свежеобжаренный кофе</div>
           <div className="description_text">
           <p>Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом.</p>
           <p>
           Мы обжариваем кофе каждые выходные.
           </p>
           </div>
           <div className="button_catalog zindex"><p>Посмотреть каталог</p></div>
           </div>

           <div className="image_cup1 zindex">
            <img src={imageCup} alt="cupOfcoffee"></img>
            </div>
            <div className="zerna">
            <img src={zernaCoffee} alt="zernaoffee"></img>
            </div>
          
           <div className="image_nav">
           <img src={ellipseEmpty} alt="black"></img>
           <img src={ellipseEmpty} alt="black"></img>
           <img src={ellipseBlack} alt="black"></img>
           </div>

     </div>
       
    );
}