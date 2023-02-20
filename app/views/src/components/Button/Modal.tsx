import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DeleteShop } from '../../services/ShopRequest';

function DeleteModal(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Deleting your shop
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure ?</h4>
        <p>
          This operation is definitive and might be painfull
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={() => DeleteShop()}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalButton() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="outline-danger" onClick={() => setModalShow(true)}>
        Delete shop
      </Button>

      <DeleteModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ModalButton;