import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import ProductList from "../components/ProductList";
import TypeBar from "./TypeBar";
import { observer } from "mobx-react-lite";
import { CoffeShopContext } from "../components/Context";
import { fetchBrand, fetchProduct, fetchType } from "../http/productApi";
import Pages from "../components/Pages";

const Shop=observer(()=>{

  const {product}=useContext(CoffeShopContext);

  useEffect(()=>{
    fetchType().then(data=>product.setTypes(data));
    fetchBrand().then(data=>product.setBrands(data));
    //fetchProduct().then(data=>
    //product.setProduct(data.rows)
    //product.setTotalCount(data.count)
    //);

  },[]);
    return(
   
        <Container>
      <Row>
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9} >
          <BrandBar/>
          <ProductList/>
          
          <Pages/>
          
        </Col>
      
      </Row>


     

        </Container>

       
       
    );
});

export default Shop;