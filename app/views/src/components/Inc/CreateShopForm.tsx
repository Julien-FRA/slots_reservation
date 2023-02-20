import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useCallback, useEffect, useState } from "react";
import { CreateShops } from '../../services/ShopRequest';
import { GetUserShop } from '../../services/ShopRequest';
import { Spinner, Table } from 'react-bootstrap';
import ModalButton from '../Button/Modal';

function CreateShop() {
  
  const [hasShop, setHasShop] = useState<any>();
  const [isLoading, setIsLoading] = useState(false)
  console.log("hasShopValue", hasShop)
  const [shopData, setShopData] = useState<any>({
    iduser: 2, //CHANGE TO URL PARAMS
    name: ' ',
    address:' ',
    service:' '
  });

  const handleOnChange = (event:any)=> {
    const value = event.target.value;
    setShopData({
      ...shopData,
      [event.target.name]: value
    });
  };


  const handleSubmit = useCallback(async(event: any) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setIsLoading(true);
    setHasShop(true);
    var shopJSON = JSON.stringify(shopData);
    console.log("this is shopdatajson",shopJSON) 
    try {
      await CreateShops(shopJSON);
      setIsLoading(false); // hide the loader
    } catch (error) {
      setIsLoading(false); // hide the loader even when there's an error
      console.error(error);
    }
  }, [shopData]);

  const [userShop, setUserShop] = useState<any>([]);
  useEffect(() => {
    const hasShopRequest = async() => {
      setIsLoading(true);
      try {
        var result = await GetUserShop();
        if (!result) {
          console.log('Response is an empty JSON object');
          setHasShop (false);
        } else {
          console.log('Response is not an empty JSON object');
          setUserShop(result);
          setHasShop (true);
        }
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    hasShopRequest()
  }, [hasShop]);
  return (
    <>
      {isLoading ? ( // show the loader if the request is still in progress
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) :
      (hasShop === false ? 
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
        : 
        <>
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID SHOP</th>
              <th>ID USER</th>
              <th>Shop Name</th> 
              <th>Address</th> 
              <th>Service Time</th>
            </tr>
          </thead>
          <tbody>
            {userShop.map((item: any) => (
              <tr>
                <td>{item.idShop}</td>
                <td>{item.idUser}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.service}</td>
              </tr>
            ))}
          </tbody>
          </Table>
          <ModalButton/>
        </>

      )}
    </>
  );
}

export default CreateShop;