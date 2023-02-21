import React from 'react';
import Button from 'react-bootstrap/Button';
import GlobalModal from '../Container/Modal';

function BtnEdit(props:any) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="outline-primary" onClick={() => setModalShow(true)}>
        Edit
      </Button>
      
      <GlobalModal
        type="editModal"
        show={modalShow}
        onHide={() => setModalShow(false)}
        idShop={props.idShop}
        updateShopData={props.updateShopData}
      />
    </>
  );
}

export default BtnEdit;