import { useCallback, useEffect, useState } from "react";
import { CreateShopsRequest, EditShopRequest } from '../../../services/ShopRequest';
import { GetUserShopRequest } from '../../../services/ShopRequest';
import { Shop } from "../../../schemas/Shop";
import CreateWorkingHours from "./CreateWorkingHours";
import EditWorkingHours from "./EditWorkingHours";

interface WorkingHoursManagerProps {
    requestType: string,
}

const WorkingHoursManager: React.FC<WorkingHoursManagerProps> = (props: any) => {
    console.log("props",props)
    const [workingHoursRequestType, setWorkingHoursRequestType] = useState<boolean>(true);
    const [hasShop, setHasShop] = useState<boolean>(true);
    const [userShop, setUserShop] = useState<Shop[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [shopData, setShopData] = useState<Shop>({
    idshop: 0,
    iduser: 2, // CHANGE TO URL PARAMS
    name: ' ',
    address: ' ',
    service: ' '
    });
    const [idShop, setIdShop] = useState<number | undefined>();
    const [addShop, setAddShop] = useState<boolean>(false);

    /**
     * This function updates shopData hook on event (each time form is modified).
     * @param event
     */
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void=> {
        const value = event.target.value; 
        setShopData({
            ...shopData,
            idshop: idShop,
            [event.target.name]: value
        }) 
    };

    /**
     * This function checks form data syntax and make a POST request to the API.
     * setIsloading hook sets a loader while awaiting POST request
     */
    const handleSubmit = useCallback(async(event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setIsLoading(true);
        var shopJSON = JSON.stringify(shopData);
        try {
            await (workingHoursRequestType ? (CreateShopsRequest(shopJSON),setHasShop(true)) : (EditShopRequest(shopJSON), setHasShop (false)));
            setAddShop(false);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error(error);
        }
        setWorkingHoursRequestType(true);
    }, [shopData]);

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
        shopData: shopData,
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