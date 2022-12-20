import React from "react";
import catalogImg1 from '../images/catalogImg1.png';
import catalogImg2 from '../images/catalogImg2.png';
import catalogImg3 from '../images/catalogImg3.png';
import catalogImg4 from '../images/catalogImg4.png';

export default function Catalogs(){
    return(
      
      <div className="catalogWrapper">
           <p className="main_catalog_text">Каталоги нашей продукции</p>
           <div className="catalogItems">
                 <div className="catalogItem">
                    <img src={catalogImg1} alt='coffe'></img>
                    <p className="text_catalog">Свежеобжаренный кофе</p>
                 </div>
                 <div className="catalogItem">
                 <img src={catalogImg2} className="imgUP" alt='coffe'></img>
                    <p className="text_catalog" style={{
                    width: '206px',marginTop:'150px'}}>Чай и кофейные напитки</p>
                    <div className="button__buy"><p>Купить</p></div>
                 </div>
                 <div className="catalogItem">
                 <img src={catalogImg3} alt='coffe'></img>
                    <p className="text_catalog">Продукция для вендинга</p>
                 </div>
                 <div className="catalogItem">
                 <img src={catalogImg4} alt='coffe'></img>
                    <p className="text_catalog">Здоровое питание</p>
                 </div>
           </div>
       </div>
       

        
    );
}