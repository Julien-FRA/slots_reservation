import { useCallback, useEffect, useState } from "react";
import { CreateShopsRequest, EditShopRequest } from '../../../services/ShopRequest';
import { GetUserShopRequest } from '../../../services/ShopRequest';
import { Shop } from "../../../schemas/Shop";
import CreateWorkingHours from "./CreateWorkingHours";
import EditWorkingHours from "./EditWorkingHours";
import { CreateEmployeeWorkingHoursRequest } from "../../../services/WorkingHoursRequest";
import { UpdateEmployeeWorkingHoursRequest } from "../../../services/WorkingHoursRequest";
import { setInterval } from "timers/promises";

interface WorkingHoursManagerProps {
    requestType: string,
}

const WorkingHoursManager: React.FC<WorkingHoursManagerProps> = (props: any) => {
    const [workingHoursRequestType, setWorkingHoursRequestType] = useState<boolean>(true);
    const [hasShop, setHasShop] = useState<boolean>(true);
    const [userShop, setUserShop] = useState<Shop[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [workingHourData, setWorkingHourData] = useState<any>({
        idEmployee: props.props.selectedEmployee,
        day: ' ',
        startTime: '', 
        endTime: ' ',
        status: ' '
    });
    const [idShop, setIdShop] = useState<number | undefined>();
    const [addShop, setAddShop] = useState<boolean>(false);

    /**
     * This function updates workingHourData hook on event (each time form is modified).
     * @param event
     */
    const handleOnChange = (event: any ) => {
        const value = event.target.value; 
        // eslint-disable-next-line no-lone-blocks
        { workingHoursRequestType ? 
            setWorkingHourData({
                ...workingHourData,
                idWorkingHours: props.workingHourArray.idWorkingHours,
                [event.target.name]: value
            })
            :
            setWorkingHourData({
                ...workingHourData,
                [event.target.name]: value
            })
        }
    };

    /**
     * This function checks form data syntax and make a POST request to the API.
     * setIsloading hook sets a loader while awaiting POST request
     */
    const handleSubmit = useCallback(async(event: any) => {
        event.preventDefault();
        
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setIsLoading(true);
        var workingHoursJSON = JSON.stringify(workingHourData);
        try {
            await (workingHoursRequestType ? (UpdateEmployeeWorkingHoursRequest(workingHoursJSON),setHasShop(true)) : (CreateEmployeeWorkingHoursRequest(workingHoursJSON)));
            setAddShop(false);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error(error);
        }
        //setWorkingHoursRequestType(true);
        window.location.reload();
      
    }, [workingHourData, workingHoursRequestType]);

    /**
     * This useEffect hook runs each time hasShop state's change, calling hasShopRequest
     * function, to update front in consequence.
     */
    useEffect(() => {
        const hasShopRequest = async() => {
        setIsLoading(true);
        try {
            var result = await GetUserShopRequest();

            if (!result || addShop === true) { //add state to break on adding new shop
                setHasShop (false);
            } else {
                setUserShop(result);
                setHasShop (true);
            }
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
        }
        hasShopRequest()
  }, [hasShop]);
  

    /**
     * This function is passed to CardContainer up until deleteShop button, 
     * to trigger the above useEffect hook.
     * @param value 
     */
    const workingHoursProps = {
        hasShop: hasShop,
        userShop: userShop,
        isLoading: isLoading,
        workingHourData: workingHourData,
        idShop: idShop,
        workingHoursRequestType: workingHoursRequestType,
        setIdShop: setIdShop,
        setWorkingHoursRequestType: setWorkingHoursRequestType,
        handleSubmit: handleSubmit,
        handleOnChange: handleOnChange,
        setHasShop: setHasShop,
        setAddShop: setAddShop,
    };
    return (
        <>
            {props.requestType === 'create' ? <CreateWorkingHours {...workingHoursProps}/> : <EditWorkingHours {...workingHoursProps}/> }
        </>
    )
}

export default WorkingHoursManager;