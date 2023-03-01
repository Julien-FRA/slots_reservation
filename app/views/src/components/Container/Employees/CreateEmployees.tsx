import LoadSpinner from "../../Inc/LoadSpinner";
import WorkingHoursManagerForm from "../../Form/WorkingHoursManagerForm";
import EmployeesManagerForm from "../../Form/EmployeesManagerForm";

const CreateEmployees = (props:any) => {
  props.setEmployeeRequestType(true);
  return (
    <>
      {props.isLoading ? (
        <LoadSpinner />
      ) :
        <EmployeesManagerForm {...props} />
      }
    </>
  );
}

export default CreateEmployees;