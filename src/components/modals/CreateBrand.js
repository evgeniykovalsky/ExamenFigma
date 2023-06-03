import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { createBrand } from "../../http/productApi";

const CreateBrand=({show,onHide})=>{

  const [value,setValue]=useState('');
  const addBrand=()=>{
    createBrand({name:value}).then((data)=>{
      setValue('');
      onHide();
    });
  }

    return(
        <Modal
        show={show}   
        onHide={onHide}    
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Добавить Бренд
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
            <Form.Control placeholder={"Введите название бренда"}
              value={value}
              onChange={e =>setValue(e.target.value)}
            />
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
          <Button variant="outline-success" onClick={addBrand}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    );
}
export default CreateBrand;