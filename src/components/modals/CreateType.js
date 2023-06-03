import React, { useState } from "react";
import { Modal,Form,Button  } from "react-bootstrap";
import { createType } from "../../http/productApi";

const CreateType=({show,onHide})=>{
const [value,setValue]=useState('');
const addType=()=>{
  
  createType({name:value}).then(item=>{
    setValue('');
    onHide();
  })

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
           Добавить Тип
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
            <Form.Control placeholder={"Введите название типа"}
                          value={value}
                          onChange={e=>setValue(e.target.value)}
            />
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
          <Button variant="outline-success" onClick={addType}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    );
}
export default CreateType;