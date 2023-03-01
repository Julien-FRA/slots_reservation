import { InputGroup, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const WorkingHoursManagerForm = (props: any) => {
    return(
    <Form noValidate onSubmit={props.handleSubmit}>
        <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label>Starting Time</Form.Label>
            <Form.Control
                onChange={props.handleOnChange}
                name="startTime"
                required
                type="text"
                    placeholder="Ex : 12:30"
                    //defaultValue={"19:30"}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>Ending Time</Form.Label>
            <Form.Control
                onChange={props.handleOnChange}
                name="endTime"
                required
                type="text"
                placeholder="Ex : 13:30"
                    //defaultValue={"20:30"}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom03">
            <Form.Label>Day</Form.Label>
            <InputGroup>
                <Form.Control
                onChange={props.handleOnChange}
                name="day"
                type="text"
                placeholder="Ex : 2023-02-28"
                aria-describedby="inputGroupPrepend"
                        required
                    //defaultValue={"2023-03-04"}
                />
                <Form.Control.Feedback type="invalid">
                Please change !
                </Form.Control.Feedback>
            </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom03">
            <Form.Label>Status</Form.Label>
            <InputGroup>
                <Form.Control
                onChange={props.handleOnChange}
                name="status"
                type="text"
                        placeholder="Ex : Taken"
                        //defaultValue={"available"}
                aria-describedby="inputGroupPrepend"
                required
                />
                <Form.Control.Feedback type="invalid">
                Please change !
                </Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
        {props.workingHoursRequestType ? 
            <Button type="submit">Edit working hour</Button>
        :
            <Button type="submit">Create working hour</Button>
        }
    </Form>
    )
}

export default WorkingHoursManagerForm;