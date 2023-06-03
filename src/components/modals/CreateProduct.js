import React, { useContext, useState, useEffect } from "react";
import { Modal, Form, Button, Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { createProduct, fetchBrand, fetchProduct, fetchType } from "../../http/productApi";
import { CoffeShopContext } from "../Context";
import { Row, Col } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const CreateProduct = observer(({ show, onHide }) => {
  /////////////////////////////////////////////////
  const [name, SetName] = useState('');
  const [price, setPrice]=useState('');
  const [gorchinka, SetGorchinka] = useState('');
  const [kislinka, SetKislinka] = useState('');
  const [nasishenost, SetNasichenost] = useState('');
  const [progarka, SetProgarka] = useState('');
  const [rating, SetRating] = useState('');
  const [discaunt, SetDiscaunt] = useState(false);
  const [brand, SetBrand] = useState(null);
  const [type, SetType] = useState(null);
  const [file, setFile] = useState(null);
 // const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchType().then(data => product.setTypes(data));
    fetchBrand().then(data => product.setBrands(data));
  }, []);

  const selectFile = e => {
    setFile(e.target.files[0]);
  }


  //////////////////////////////////////////////////
  const { product } = useContext(CoffeShopContext);
  const [productInfo, setProductInfo] = useState([]);
  const addInfo = () => {
    setProductInfo([...productInfo, { title: '', description: '', number: Date.now() }]);
  }
  const removeInfo = (number) => {
    setProductInfo(productInfo.filter(i => i.number !== number))
  }
  const changeInfo = (key, value, number) => {/////end there    
    setProductInfo(productInfo.map(i => i.number === number ? { ...i, [key]: value } : i));
  }

  const addProduct = () => {
    const formData=new FormData();
    formData.append('name',name);
    formData.append('price',price);
    formData.append('gorchinka',gorchinka);
    formData.append('kislinka',kislinka);
    formData.append('nasishenost',nasishenost);
    formData.append('progarka',progarka);
    formData.append('rating',rating);
    formData.append('discaunt',discaunt);
    formData.append('img',file);
    formData.append('typeId',product.selectedType.id);
    formData.append('brandId',product.selectedBrand.id);
    formData.append('productInfo',JSON.stringify(productInfo));

   createProduct(formData).then(data=>onHide());
       
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <DropdownToggle>{product.selectedType.name || 'Выберите тип'}</DropdownToggle>
            <DropdownMenu>
              {product.types.map(type =>
                <DropdownItem key={type.id}
                  onClick={() => product.setSelectedType(type)}

                >{type.name}</DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <DropdownToggle>{product.selectedBrand.name || 'Выберите бранд'}</DropdownToggle>
            <DropdownMenu>
              {product.brands.map(brand => <DropdownItem key={brand.id}
                onClick={() => product.setSelectedBrand(brand)}
              >{brand.name}</DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            placeholder="Введите название продукта"
            value={name}
            onChange={e => SetName(e.target.value)}
          />
           <Form.Control
            className="mt-3"
            placeholder="Введите цену продукта"
            value={price}
            type='number'
            onChange={e => setPrice(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите горчинку"
            type="number"
            value={gorchinka}
            onChange={e => SetGorchinka(Number(e.target.value))}

          />
          <Form.Control
            className="mt-3"
            placeholder="Введите кислинку"
            type="number"
            value={kislinka}
            onChange={e => SetKislinka(Number(e.target.value))}

          />
          <Form.Control
            className="mt-3"
            placeholder="Введите насыщенность"
            type="number"
            value={nasishenost}
            onChange={e => SetNasichenost(Number(e.target.value))}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите прожарку"
            type="number"
            value={progarka}
            onChange={e => SetProgarka(Number(e.target.value))}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите рэйтинг"
            type="number"
            value={rating}
            onChange={e => SetRating(Number(e.target.value))}
          />
          <div className="form-check mt-3">
            <input className="form-check-input" type="checkbox" checked={discaunt} id="flexCheckChecked"
              onChange={e => SetDiscaunt(!discaunt)} />
            <label class="form-check-label" for="flexCheckChecked">
              Discaunt(Cкидка)
            </label>
          </div>
          <Form.Control
            className="mt-3"
            placeholder="Загрузить фото"
            type="file"
            onChange={selectFile}
          />
          <hr />
          <Button variant="outline-dark"
            onClick={addInfo}
          >
            Добавить новое свойство
          </Button>
          {productInfo.map((i) => {
            return (
              <Row key={i.number} className="mt-4">
                <Col md={4}>
                  <Form.Control 
                   value={i.title}
                   onChange={(e)=>changeInfo('title',e.target.value,i.number)}
                  placeholder="Введите название свойства" />
                </Col>
                <Col md={4}>
                  <Form.Control 
                  value={i.description}
                   onChange={(e)=>changeInfo('description',e.target.value,i.number)}
                  placeholder="Введите описание" />
                </Col>
                <Col md={4}>
                  <Button variant="outline-danger" onClick={() => removeInfo(i.number)}>
                    Удалить
                  </Button>
                </Col>

              </Row>)
          })}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addProduct}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
});
export default CreateProduct;