import NewsItem from './NewsItem';
import AllNews from './NewsDB';


export default function News() {
    return (
        <div className="newsWrapper">
            <div className="title">Новости компании</div>
            <div className="itemWrapper">
                

                    {AllNews.map((item, index) => <NewsItem key={index} item={item} />)}


                
            </div>



        </div>
    );

}