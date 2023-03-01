import Card from "react-bootstrap/esm/Card";
import Button from 'react-bootstrap/Button';
import WorkingHoursManager from "../WorkingHours/WorkingHoursManager";
import { useState } from "react";
import EditWorkingHours from "../WorkingHours/EditWorkingHours";
import GlobalModal from "../Modal";
import { DeleteEmployeeWorkingHourRequest } from "../../../services/WorkingHoursRequest";

const CrudOperationsWorkingHours = (props:any) => {
    const [modalShow, setModalShow] = useState(false)
    const DeleteShopFunc = () => {
        DeleteEmployeeWorkingHourRequest(props.workingHourArray.idWorkingHours);
        window.location.reload();
    }
    return (
        <Card.Body>
            <Card.Title> What do you want to do ? </Card.Title>
            <Card.Text> Do you want to edit or delete the selected working hour ? </Card.Text>
            <Card.Footer style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                
                <>
                    <Button variant="outline-primary" onClick={() => setModalShow(true)}>
                        Edit working hour
                    </Button> 
                    <Button variant="outline-warning" onClick={() => { DeleteShopFunc(); props.onHide() }}>
                        Delete working hour
                    </Button>
                </>
                <GlobalModal
                    {...props}
                    type={"editWorkingHourModal"}
                    show={modalShow}
                    onHide={() => (setModalShow(false))}
                />
            </Card.Footer>
        </Card.Body>
    )
}

export default CrudOperationsWorkingHours;