import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
import image25 from '../images/image25.png';
import imageCup from '../images/cupofcoffee.png';
import zernaCoffee from '../images/zernacoffee.png';
import { LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { useLocation,useNavigate } from "react-router-dom";
import { CoffeShopContext } from "../components/Context";
import { observer } from "mobx-react-lite";




const Auth = observer(()=> {
  const {user}=useContext(CoffeShopContext);
  const navigate=useNavigate();
  const location=useLocation();
  const isLogin=location.pathname===LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

   const click= async()=>{
    try {
      let data;
      if (isLogin) {
          data = await login(email, password);
          console.log(data);
      } else {
           console.log(email +"  : "+password);
          data = await registration(email, password);
          
          
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
  } catch (e) {
      alert(e.response.data.message)
  }

   }


  return (

    <Container className="d-flex justify-content-center align-items-center container overlay"
      style={{ height: window.innerHeight - 54 }}>
      <Card className="cardAuth modal__window"
        style={{ border: 'none', borderRadius: "40px" }}>

        <Form className="formData">
          <div className="welcome">
            <div className="image_cup_reg">
              <img src={imageCup} alt="cupOfcoffee"></img>
            </div>
            <div className="zerna_reg">
              <img src={zernaCoffee} alt="zernaoffee"></img>
            </div>
            <div className="dobro">
              Добро пожаловать!
            </div>
            <div className="akkaynt">
              Уже есть аккаунт?
              <div className="input_login">
              {/* <Form.Control
                style={{ width: 250, height: 35, marginBottom:10 }}
                placeholder="Введите Ваш email..."
                value={email}
                onChange={e=>setEmail(e.target.value)}
              />

              <Form.Control style={{ width: 250, height: 35 }}
                placeholder="Введите Ваш пароль..."
                value={password}
                onChange={e=>setPassword(e.target.value)}
                type="password"
              /> */}
            </div>
            </div>
            


            <Button onClick={click} className="but1" variant="outline" style={{ width: 340, height: 70, background: '#ecaf13', borderradius: '5px', marginLeft: '25px', color: '#FFFFFF' }}>
              Войти
            </Button>

          </div>
          <div className="registr_form">
            <img src={image25} alt="image25"></img>
            <p>
              Регистрация
            </p>
            <div className="textReg">Зарегистрируйтесь на сайте, чтобы первым получать скидки и узнавать акционные предложения!</div>
            {/* <Form.Control
              style={{ width: 680, height: 70 }}
              placeholder="Введите Ваше Имя Фамилию"
              
            /> */}

            <Form.Control style={{ width: 680, height: 70 }}
              placeholder="Введите Ваш email..."
              value={email}
              onChange={e=>setEmail(e.target.value)}
            />
            {/* <Form.Control style={{ width: 680, height: 70 }}
              placeholder="Введите Ваш phone..."
              value="123131"
            /> */}
            <Form.Control style={{ width: 680, height: 70 }}
              placeholder="Введите Ваш пароль..."
              value={password}
              onChange={e=>setPassword(e.target.value)}
              type="password"
            />
            <Button onClick={click} variant="outline" style={{ width: 680, height: 70, background: '#ecaf13', borderradius: '5px', color: '#FFFFFF' }}>
              Зарегистрироваться
            </Button>

          </div>
        </Form>
      </Card>
    </Container>

  );
});
export default Auth;