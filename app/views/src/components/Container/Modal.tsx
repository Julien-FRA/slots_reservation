import { Button, Modal } from "react-bootstrap";
import { DeleteShop } from '../../services/ShopRequest';
import { EditShop } from '../../services/ShopRequest';
import CreateShop from "../Inc/CreateShopForm";

const GlobalModal:any = (props: any) => {
    const DeleteShopFunc = () => {
        DeleteShop(props.idShop);
        props.updateShopData(false);
    }
    const EditShopFunc = () => {
        EditShop(props.idShop);
        props.updateShopData(false);
    }

    if (props.type === "deleteModal") {
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
                <Button onClick={() => {DeleteShopFunc(); props.onHide()} }>Delete</Button>
            </Modal.Footer>
            </Modal>
        );
    } else if (props.type === "editModal") {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Editing your shop
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreateShop/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button onClick={() => {EditShopFunc(); props.onHide()} }>Validate changes</Button>
            </Modal.Footer>
            </Modal>
        );
    }
}

export default GlobalModal;