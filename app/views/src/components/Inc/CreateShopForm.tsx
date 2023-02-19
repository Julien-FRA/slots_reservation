import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react";
import { CreateShops } from '../../services/ShopRequest';
import { GetUserShop } from '../../services/ShopRequest';

function CreateShop() {
  const handleOnChange = (event:any)=> {
    const value = event.target.value;
    setShopData({
      ...shopData,
      [event.target.name]: value
    });
  };

  const handleSubmit = (event:any)=> {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setHasShop(true);
    let shopDataJson = JSON.stringify(shopData);
    CreateShops(shopDataJson);
  };

  const [hasShop, setHasShop] = useState<any>(false);
  console.log("this is hasShop", hasShop)
  const [shopData, setShopData] = useState<any>({
    iduser: 1, //CHANGE TO URL PARAMS
    name: ' ',
    address:' ',
    service:' '
  });
  return (
    <>
      {hasShop === false ? 
        (<Form noValidate validated={hasShop} onSubmit={handleSubmit}>
        
          <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label>Shop name</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="name"
              required
              type="text"
              placeholder="Ex : Mcdonald's"
              defaultValue="Mcdonald's"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>Shop address location</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="address"
              required
              type="text"
              placeholder="Ex : 10 Rue Hyjal"
              defaultValue="10 Rue Hyjal"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom03">
            <Form.Label>Enter your service type</Form.Label>
            <InputGroup>
              <Form.Control
                onChange={handleOnChange}
                name="service"
                type="text"
                placeholder="Ex : Haidresser"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please change !
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        
        <Button type="submit">Create shop</Button>
        </Form>)
        : <div>Shop created !</div>
      }
    </>
  );
}

export default CreateShop;