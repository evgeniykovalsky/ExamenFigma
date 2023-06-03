import React, { useContext } from "react";
import { CoffeShopContext } from "../components/Context";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import {ADMIN_ROUTE, CATALOGCOFFE_ROUTE, LOGIN_ROUTE,REGISTRATION_ROUTE} from "../utils/consts"



const NavBar=observer(()=>{
    const {user}=useContext(CoffeShopContext);
    const navigate=useNavigate();
    const location=useLocation();

    const logOut=()=>{
      user.setUser({});
      user.setIsAuth(false);
    }
    return(
       
        <Navbar  bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>navigate(CATALOGCOFFE_ROUTE)}>Каталог</Navbar.Brand>
          
          {user.isAuth ? 
            <Nav  style={{color:'white'}}>
          <Button className="m-1"  variant="outline-light" onClick={()=>navigate(ADMIN_ROUTE)}>Админ Панель</Button>
           <Button className="m-1" variant="outline-light"  onClick={()=>logOut()}>Выйти</Button> 
           </Nav>
           :
           <Nav className="ml-auto" style={{color:'white'}}>
           <Button variant="outline-light" onClick={()=>navigate(LOGIN_ROUTE)}>Авторизация</Button>
           </Nav>

          
        }
          
        </Container>
      </Navbar>
      
    
    );
});

export default NavBar;
