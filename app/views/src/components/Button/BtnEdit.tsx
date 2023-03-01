import React from 'react';
import Button from 'react-bootstrap/Button';
import GlobalModal from '../Container/Modal';

function BtnEdit(props:any) {
  const EditShopFunc = () => {
    props.setShopRequestType(false);
    props.setIdShop(props.idShop);
  }
  return (
    <>
      <Button variant="outline-primary" onClick={() => EditShopFunc()}>
        Edit
      </Button>
    </>
  );
}

export default BtnEdit;