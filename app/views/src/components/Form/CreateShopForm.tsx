import { InputGroup, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const CreateShopForm = (props:any) => {
    return(
    <Form noValidate validated={props.hasShop} onSubmit={props.handleSubmit}>
        <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label>Shop name</Form.Label>
            <Form.Control
                onChange={props.handleOnChange}
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
                onChange={props.handleOnChange}
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
                onChange={props.handleOnChange}
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
    </Form>
    )
}

export default CreateShopForm;