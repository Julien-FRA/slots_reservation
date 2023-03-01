import EmployeesManagerForm from '../../Form/EmployeesManagerForm';
import ShopManagerForm from '../../Form/ShopManagerForm';
import WorkingHoursManagerForm from '../../Form/WorkingHoursManagerForm';
import LoadSpinner from "../../Inc/LoadSpinner";

const EditEmployees = (props:any) => {
    props.setEmployeeRequestType(false);
    return (
    <>
        {props.isLoading ? (
            <LoadSpinner/>
        ) :
            <EmployeesManagerForm {...props} />
        }
    </>
    );
}

export default EditEmployees;