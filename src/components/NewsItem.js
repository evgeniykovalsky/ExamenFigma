import shortid from "shortid";

export default function NewsItem({ item }) {
    return (
        <div className="cardWrapper">
            {item.photo && <div className="photo" key={shortid.generate()}><img key={shortid.generate()} src={item.photo} alt=" " />
            </div>}
            <div className="description">
                <div className="titleCard">
                    {item.title}
                </div>
                <div className="text">
                    {item.newsText.map((item) => <div key={shortid.generate()} className="newsText">{item}</div>)}
                </div>
                <div className="more">Подробнее...</div>
            </div>
        </div>
    );
}