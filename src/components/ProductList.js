import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row, Card, Col } from "react-bootstrap";
import { CoffeShopContext } from "./Context";
import TovarDiscauntItem from "../components/TovarDiscauntItem";


const ProductList = observer(() => {
    const { product } = useContext(CoffeShopContext);
    return (


       <div className=" cards_in_shop">
            <div className="filterRezult">
                {product.products.map((item, index) => {
                    return <TovarDiscauntItem key={index} item={item} />
                })}


            </div>

        </div> 
       


    );
});
export default ProductList;