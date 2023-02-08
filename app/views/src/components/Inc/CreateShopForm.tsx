import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect } from "react";
import axios from "axios";
import { ErrorCallback } from 'typescript';

function CreateShop() {
  

  const handleOnChange = (event:any)=> {
    const value = event.target.value;
    setShopName({
      ...shopName,
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
    const headers = {
      'Content-Type': 'text/plain; charset=utf-8'
    };
    const data = JSON.stringify(shopName)
    console.log("this is stringified shop", data)
    try {
      let result:any = axios
      .post("http://localhost:3200/api/shop/create", {data}, {headers})
      console.log(result.response);
    } catch (error:any) {
      console.log("this is",error.response.data)
    }
    /*axios
      .post("http://localhost:3200/api/shop/create", {shopName}, {headers})
      .then(response => {
        console.log("this is",error.response.data)
        // Handle response
      })*/
  
  };
  const [hasShop, setHasShop] = useState<any>(false);
  const [shopName, setShopName] = useState<any>({
    idUser: 1, //CHANGE TO URL PARAMS
    name: ' ',
    address:' ',
    service:' '
  });
  //console.log(shopName)
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