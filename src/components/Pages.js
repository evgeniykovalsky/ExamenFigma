import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { CoffeShopContext } from "./Context";


const Pages=observer(()=>{
    const {product}=useContext(CoffeShopContext);
    const pageCount= Math.ceil(product.totalCount/product.limit);
    const [pages,setPages]=useState([]);

    useEffect(()=>{
        setPages([]);
       
        for(let i=0;i<pageCount;i++){
            setPages(pages=>[...pages,i+1]);
    }
    },[]);
    console.log(pages)
   

   

    return(
       <Pagination className="mt-5 pagination">
        {pages.map(page=>
                   <Pagination.Item key={page} onClick={()=>product.setPage(page)} active={product.page===page}
                   >{page}</Pagination.Item>)}
       </Pagination>
    );
} );
export default Pages;
