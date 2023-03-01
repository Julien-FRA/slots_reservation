import { InputGroup, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const EmployeesManagerForm = (props: any) => {
    return(
    <Form noValidate onSubmit={props.handleSubmit}>
        <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
                onChange={props.handleOnChange}
                name="name"
                required
                type="text"
                placeholder="Ex : John"
                //defaultValue={"19:30"}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
                onChange={props.handleOnChange}
                name="lastName"
                required
                type="text"
                placeholder="Ex : Doe"
                    //defaultValue={"20:30"}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom03">
            <Form.Label>Expertise</Form.Label>
            <InputGroup>
                <Form.Control
                onChange={props.handleOnChange}
                name="expertise"
                type="text"
                placeholder="Ex : Hairdresser"
                aria-describedby="inputGroupPrepend"
                        required
                    //defaultValue={"2023-03-04"}
                />
                <Form.Control.Feedback type="invalid">
                Please change !
                </Form.Control.Feedback>
            </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom04">
            <Form.Label>Description</Form.Label>
                <InputGroup>
                    <Form.Control
                    onChange={props.handleOnChange}
                    name="description"
                    type="text-area"
                    placeholder="Ex : LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum"
                    //defaultValue={"available"}
                    aria-describedby="inputGroupPrepend"
                    required
                    />
                    <Form.Control.Feedback type="invalid">
                    Please change !
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom05">
            <Form.Label>Phone number</Form.Label>
                <InputGroup>
                    <Form.Control
                    onChange={props.handleOnChange}
                    name="phone"
                    type="text"
                    placeholder="Ex : 06********"
                    //defaultValue={"available"}
                    aria-describedby="inputGroupPrepend"
                    required
                    />
                    <Form.Control.Feedback type="invalid">
                    Please change !
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom06">
            <Form.Label>Email</Form.Label>
                <InputGroup>
                    <Form.Control
                    onChange={props.handleOnChange}
                    name="email"
                    type="text"
                    placeholder="Ex : doe@gmail.com"
                    //defaultValue={"available"}
                    aria-describedby="inputGroupPrepend"
                    required
                    />
                    <Form.Control.Feedback type="invalid">
                    Please change !
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom07">
            <Form.Label>Price</Form.Label>
                <InputGroup>
                    <Form.Control
                    onChange={props.handleOnChange}
                    name="price"
                    type="number"
                    placeholder="Ex : 15"
                    //defaultValue={"available"}
                    aria-describedby="inputGroupPrepend"
                    required
                    />
                    <Form.Control.Feedback type="invalid">
                    Please change !
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
        {props.employeeRequestType ? 
            <Button type="submit">Create employee</Button>
        :
            <Button type="submit">Edit employee</Button>
        }
    </Form>
    )
}

export default EmployeesManagerForm;