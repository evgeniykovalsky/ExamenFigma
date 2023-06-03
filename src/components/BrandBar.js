import { observer } from "mobx-react-lite";
import {React, useContext}  from "react";
import { Card, Row } from "react-bootstrap";
import { CoffeShopContext } from "./Context";

const BrandBar=observer(()=>{
    const {product}=useContext(CoffeShopContext);
return (
    <Row className="brandbar">
      {product.brands.map((brand)=>{
       return <Card key={brand.id} className="cardBrand"
               style={{cursor:'pointer'}}
               onClick={()=>product.setSelectedBrand(brand)}
               border={brand.id===product.selectedBrand.id ? 'danger':'light'}>{brand.name}</Card>
      })}
    </Row>
);
}
);

export default BrandBar;