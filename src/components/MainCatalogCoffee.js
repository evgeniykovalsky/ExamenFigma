import CatalogCoffeeFilter from "./CatalogCoffeeFilter";
import CatalogCoffeHeader from "./CatalogCoffeHeader";
import CatalogCoffeHeader2 from "./CatalogCoffeeHeader2";
import CatalogCoffeeResult from "./CatalogCoffeeResult";


export default function MainCatalogCoffee(){
    return(
        <>
           <CatalogCoffeHeader/>
           <CatalogCoffeHeader2/>
           <CatalogCoffeeFilter/>
        </>
    );
}