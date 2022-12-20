import React from "react";
import  Carousel  from "react-bootstrap/Carousel";
import KaruselItem from "./KaruselItem";
import KaruselItem1 from "./KaruselItem1";
import KaruselItem2 from "./KaruselItem2";

export default function CarouselBox(){

    return(
         <Carousel>
            <Carousel.Item data-bs-interval="2000">
             <KaruselItem/>
            </Carousel.Item>
            <Carousel.Item data-bs-interval="2000">
             <KaruselItem1/>
            </Carousel.Item>
            <Carousel.Item data-bs-interval="2000">
             <KaruselItem2/>
            </Carousel.Item>
         </Carousel>
    );
}