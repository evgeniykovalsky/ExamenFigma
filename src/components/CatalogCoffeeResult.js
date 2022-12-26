import TovarDiscauntItem from "./TovarDiscauntItem";

export default function CatalogCoffeeResult({item}){

    return(
        <>
            {item.map((item,index)=><TovarDiscauntItem key={index} item={item}/>)}
        </>
    );
}