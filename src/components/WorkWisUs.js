import cupOfcoffe from '../images/cupOfCoffe2.png';
import zernaOfCoffe from '../images/zernaOfCoffe2.png'
import imgCircle from '../images/Group 38.png';

export default function WorkWisUs() {

    return (

        <div className="wrapperWithUs">

            <div className="titleWisUs">
           <div className="title"> Почему стоит работать именно с нами?</div>
            </div>
            <div className="wrapperDescription">
             <div className="imagesWisUs">
             <div className="cup"><img src={cupOfcoffe} alt="cupCoffe"/></div>
             <div className="zerna"><img src={zernaOfCoffe} alt="cupCoffe"/></div>

             </div>
             <div className="itemsWhy">
                <div className="item__why">
                <img src={imgCircle} alt="imgCircle"/>
                <div className="text">
                    <span>Всегда свежая обжарка</span>
                    Подбор степени обжарки под каждый сорт кофе. Всегда свежая обжарка
                </div>

                </div>
                <div className="item__why">
                <img src={imgCircle} alt="imgCircle"/>
                <div className="text">
                    <span>Лучшие цены на продукцию</span>
                    Благодаря крупным объемам производства мы даем лучшие цены на нашу продукцию
                </div>
                </div>
                <div className="item__why">
                <img src={imgCircle} alt="imgCircle"/>
                <div className="text">
                    <span>Консультации 24/7</span>
                    Наши специалисты готовы всегда помочь и подсказать вам с выбором кофе или другой продукции.
                </div>
                </div>
             </div>

            </div>
            <div className='withUsfooter'></div>

        </div>


    );
}