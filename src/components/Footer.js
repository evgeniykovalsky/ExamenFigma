import imageLogo from '../images/image25.png';
export default function Footer() {
    return (
        <div className="footerWpapper">
          
            <img src={imageLogo} alt="image25"></img>
            <div className='links'>
            <div className='katalog'>Каталог товаров</div>
            <div className='blog'>Блог</div>
            <div className='kontacts'>Контакты</div>
            
            </div>

        </div>
    );
}