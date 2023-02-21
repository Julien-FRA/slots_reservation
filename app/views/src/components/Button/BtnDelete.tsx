import React from 'react';
import Button from 'react-bootstrap/Button';
import GlobalModal from '../Container/Modal';

function BtnDelete(props:any) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="outline-danger" onClick={() => setModalShow(true)}>
        Delete
      </Button>
      
      <GlobalModal
        type="deleteModal"
        show={modalShow}
        onHide={() => setModalShow(false)}
        idShop={props.idShop}
        updateShopData={props.updateShopData}
      />
    </>
  );
}

export default BtnDelete;