import cupOfcoffe from '../images/cupOfCoffe2.png';
import zernaOfCoffe from '../images/zernaOfCoffe2.png'

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
                <div className="item__why"></div>
                <div className="item__why"></div>
                <div className="item__why"></div>
             </div>

            </div>

        </div>


    );
}