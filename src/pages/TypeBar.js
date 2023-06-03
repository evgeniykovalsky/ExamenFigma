import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { CoffeShopContext } from "../components/Context";

const TypeBar=observer(()=>{
    const {product}=useContext(CoffeShopContext);
    return(

    <ListGroup style={{marginTop:'10px'}}>
        {product.types.map(type =>
        {
          return <ListGroup.Item className="grey"
          active={type.id===product.selectedType.id}
          onClick={()=>product.setSelectedType(type)}
          key={type.id}>{type.name}</ListGroup.Item>
        }
        )}

     
       
    </ListGroup>
    );
});

export default TypeBar;