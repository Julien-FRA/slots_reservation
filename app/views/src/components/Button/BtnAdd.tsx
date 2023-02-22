import React from 'react';
import Button from 'react-bootstrap/Button';
import GlobalModal from '../Container/Modal';

function BtnAdd(props:any) {
  const AddShopFunc = () => {
    props.setShopRequestType(true);
    props.setAddShop(true);
    props.updateShopData(false);
  }
  return (
    <>
      <Button variant="outline-primary" onClick={() => AddShopFunc()}>
        Add Shop
      </Button>
    </>
  );
}

export default BtnAdd;