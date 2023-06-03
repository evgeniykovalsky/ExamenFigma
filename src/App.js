import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { CoffeShopContext } from "./components/Context";
import { check } from "./http/userAPI";
import Spinner from "react-bootstrap/esm/Spinner";




const App=observer(()=> {
  const {user}=useContext(CoffeShopContext);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{

    check().then(data=>{
      user.setUser(true);
      user.setIsAuth(true);

    }).finally(()=>setLoading(false))

  },[]);
  if(loading){
    return   <Spinner animation={"grow"}/>
  }

  return (
   <BrowserRouter>
      <AppRouter/>
   </BrowserRouter>
  
  );
});

export default App;
