import LoadSpinner from "../../Inc/LoadSpinner";
import WorkingHoursManagerForm from "../../Form/WorkingHoursManagerForm";

const CreateWorkingHours = (props:any) => {
  props.setWorkingHoursRequestType(false);
  return (
    <>
      {props.isLoading ? (
        <LoadSpinner />
      ) :
        <WorkingHoursManagerForm {...props} />
      }
    </>
  );
}

export default CreateWorkingHours;