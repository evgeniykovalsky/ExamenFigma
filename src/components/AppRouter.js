import React, { useContext } from "react";
import {Routes,Route} from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import  { CoffeShopContext } from "./Context";
import { observer } from "mobx-react-lite";


const AppRouter=observer(()=>{

    const {user}=useContext(CoffeShopContext);
   
 
   
    return(
       
       
        <Routes>
        {/* <Route path="/" element={<Main/>}/> */}
        {/* <Route index element={<Main/>}/>
        <Route path="catalogCoffe" element={<MainCatalogCoffee/>}/> */}

       {user.isAuth && authRoutes.map(({path, Component})=>{return <Route key={path} path={path} element={Component} exact/>})

       }
       {publicRoutes.map(({path,Component})=>{return <Route key={path} path={path} element={Component} exact />

       })

       }
       
       </Routes>
       
    );

});
export default AppRouter;