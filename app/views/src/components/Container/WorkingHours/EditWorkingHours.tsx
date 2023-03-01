import ShopManagerForm from '../../Form/ShopManagerForm';
import WorkingHoursManagerForm from '../../Form/WorkingHoursManagerForm';
import LoadSpinner from "../../Inc/LoadSpinner";

const EditWorkingHours = (props:any) => {
    props.setWorkingHoursRequestType(true);
  return (
    <>
      {props.isLoading ? (
        <LoadSpinner/>
          ) :
              <WorkingHoursManagerForm {...props} />
      }
    </>
  );
}

export default EditWorkingHours;