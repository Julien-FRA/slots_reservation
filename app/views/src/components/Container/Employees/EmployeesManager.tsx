import { useState, useCallback, useEffect } from "react";
import { CreateEmployeeRequest, UpdateEmployeesRequest } from "../../../services/EmployeeRequests";
import { CreateShopsRequest, EditShopRequest, GetUserShopRequest } from "../../../services/ShopRequest";
import CreateEmployees from "./CreateEmployees";
import EditEmployees from "./EditEmployees";
import ShopsDropdown from "../../Input/ShopsDropdown";


const EmployeesManager = (props:any) => {
    const [employeeRequestType, setEmployeeRequestType] = useState<boolean>(true);
    const [hasShop, setHasShop] = useState<boolean>(true);
    const [userShop, setUserShop] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [employeesData, setEmployeesData] = useState<any>({
        idShop: 0,
        email: ' ',
        phone: ' ',
        name: ' ',
        lastName: ' ',
        expertise: ' ',
        description: ' ',
        price: ' ',
    });
    const [userIdShop, setUserIdShop] = useState<any>();
    const [addShop, setAddShop] = useState<boolean>(false);

    /**
     * This function updates employeesData hook on event (each time form is modified).
     * @param event
     */
    const handleOnChange = (event: any): void=> {
        const value = event.target.value; 
        // eslint-disable-next-line no-lone-blocks
        { employeeRequestType ? 
            setEmployeesData({
                ...employeesData,
                idShop: userIdShop,
                //idEmployee: idEmployee,
                [event.target.name]: value
            })
            :
            setEmployeesData({
                ...employeesData,
                idShop: userIdShop,
                [event.target.name]: value
            })
        }
    };

        /**
         * This function checks form data syntax and make a POST request to the API.
         * setIsloading hook sets a loader while awaiting POST request
         */
        const handleSubmit = useCallback(async(event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            console.log("employeesData",employeesData)
            
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            setIsLoading(true);
            let parseIntedArray = parseInt(employeesData.price);
            let finalArray = ({...employeesData, price: parseIntedArray})
            var employeeData = JSON.stringify(finalArray);
            console.log("employeeData",employeeData)
            try {
            await (employeeRequestType ? (CreateEmployeeRequest(employeeData),setHasShop(true)) : (UpdateEmployeesRequest(employeeData), setHasShop (false)));
                setAddShop(false);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.error(error);
            }
            setEmployeeRequestType(true);
        }, [employeesData]);

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
                    setUserIdShop(result[0].idShop);
                    setHasShop (true);
                }
            } catch (error) {
                console.error(error);
            }
            setIsLoading(false);
            }
        hasShopRequest()
    }, [addShop, hasShop]);
    console.log("this is right IDSHOP", userIdShop)
    console.log("this is right userShop", userShop)

    /**
     * This function is passed to CardContainer up until deleteShop button, 
     * to trigger the above useEffect hook.
     * @param value 
     */
    const employeeProps = {
        hasShop: hasShop,
        userShop: userShop,
        isLoading: isLoading,
        employeesData: employeesData,
        userIdShop: userIdShop,
        employeeRequestType: employeeRequestType,
        setUserIdShop: setUserIdShop,
        setEmployeeRequestType: setEmployeeRequestType,
        handleSubmit: handleSubmit,
        handleOnChange: handleOnChange,
        setHasShop: setHasShop,
        setAddShop: setAddShop,
    };
    return(
        <>
            {employeeRequestType ?
                <>
                    <ShopsDropdown {...employeeProps} />
                    <CreateEmployees {...employeeProps} />
                </>
                :
                <EditEmployees {...employeeProps} />}
        </>
    )
}

export default EmployeesManager;