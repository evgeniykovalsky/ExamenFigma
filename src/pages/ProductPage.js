import React, { useContext, useEffect, useState } from "react";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import { CoffeShopContext } from "../components/Context";
import NavBar from '../pages/NavBar';
import {useParams} from 'react-router-dom';
import { fetchOneProduct } from "../http/productApi";

export default function ProductPage() {
    const [Quantity,setQuantity]=useState(1);
    const data = useContext(CoffeShopContext);
    const {user}=useContext(CoffeShopContext);
    
    // const[product1,setProduct]=useState({info: []});
   
    // const {id}=useParams();

    // useEffect(()=>{

    //     fetchOneProduct(id).then(prod=>setProduct(prod));

    // },[]);
    
   
   
       
    const product = {
        id: 5,
        photo: '../images/tovarFoto.png',
        title: 'Colombia Supremo1',
        description: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
        vaga: [150, 250, 500, 3000],
        price: [250, 350, 500, 2000],
        countVidgukiv: 32,
        grade: 3,
        kislinka: 9,
        gorchinka: 5,
        nasishenost: 7,
        geografia: "Эфиопия",
        processing: "Cухая",
        spesial: "Популярное",
        vid_coffee: "Арабика",
        projarka: 5,
        discaunt: false
    }
    const [selectedVaga,setSelectedVaga]=useState(product.vaga[0]);
    return (
        <>
            <NavBar />
            <Container className="ProductCard mt-4">
                <Row>
                    <Col sm={4} >
                        <Image key={product.id} src={product.photo} className="image_product_page" />
                    </Col>
                    <Col sm={7} className="description">
                        <div className="objarka">
                            {data.objarka(product)}
                        </div>
                        <div className="title">
                            {product.title}
                        </div>
                        <div className="stars">
                            {data.grade(product)}

                        </div>
                        <div className="descr">
                            {product.description}
                        </div>
                        <Row className="circles">
                            <Col>Кислинка<br />{data.kislinka(product)}</Col>
                            <Col>Горчинка<br />{data.gorchinka(product)}</Col>
                            <Col>Насыщенность<br />{data.nasishenost(product)}</Col>
                        </Row>
                        <div className="radioVaga" onChange={(event)=>{setSelectedVaga(event.target.value)}} >
                        <Row>
                           
                                {product.vaga.map((item,index) => {


                                  return  <Col sm={2} key={index}>
                                       <input id={index} key={index}  type="radio" value={item} name="vaga" /><label  htmlFor={index}>{item}</label>
                                         </Col>
                                  

                                })}
                            
                        </Row>
                        </div>
                        <Row>
                            <Col sx={5}>
                                <div className="counter">
                                    <Button variant="warning" onClick={()=>Quantity>1&&setQuantity(Quantity-1)}>-</Button>
                                    <div className="textCounter">{Quantity}</div>
                                    <Button onClick={()=>setQuantity(Quantity+1)}>+</Button>
                                </div>
                            </Col>
                            <Col sx={3}>
                                <Button style={{height:"70px",width:"300px"}} variant="warning">Купить {selectedVaga} грамм </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    );
}