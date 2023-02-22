import { useCallback, useEffect, useState } from "react";
import { CreateShopsRequest, EditShopRequest } from '../../services/ShopRequest';
import { GetUserShopRequest } from '../../services/ShopRequest';
import CreateShop from "./CreateShop";
import EditShops from "./EditShop";

const ShopManager = () => {
    const [shopRequestType, setShopRequestType] = useState<any>(true);
    const [hasShop, setHasShop] = useState<any>();
    const [userShop, setUserShop] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<any>(false);
    const [shopData, setShopData] = useState<any>({
        idshop: 0,
        iduser: 2, //CHANGE TO URL PARAMS
        name: ' ',
        address:' ',
        service:' '
    });
    const [idShop, setIdShop] = useState<any>();
    const [addShop, setAddShop] = useState<any>(false);
    /**
     * This function updates shopData hook on event (each time form is modified).
     * @param event
     */
    const handleOnChange = (event:any)=> {
    console.log("this is idshop", idShop)
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
    const handleSubmit = useCallback(async(event: any) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setIsLoading(true);
        var shopJSON = JSON.stringify(shopData);
        console.log("this is shopDataJSON", shopJSON)
        //shopRequestType ? CreateShopsRequest(shopJSON) : EditShopRequest(shopJSON);
        //console.log("this is request type", request);
        
        //TRY TO ADD THIS TO UPDATE setInterval(async () => {}, 5000)
        try {
        await (shopRequestType ? CreateShopsRequest(shopJSON) : EditShopRequest(shopJSON));
            setAddShop(false);
            setHasShop(true);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error(error);
        }
        setShopRequestType(true);
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
    const updateShopData = (value:Boolean) => {
        setHasShop(value);
    };
    return (
        <>
            {shopRequestType ?
                <CreateShop setAddShop={setAddShop} setIdShop={setIdShop} setShopRequestType={setShopRequestType} hasShop={hasShop} setHasShop={setHasShop} userShop={userShop} isLoading={isLoading} shopData={shopData} handleSubmit={handleSubmit} handleOnChange={handleOnChange} updateShopData={updateShopData}/>
            :
                <EditShops setIdShop={setIdShop} setShopRequestType={setShopRequestType} hasShop={hasShop} userShop={userShop} isLoading={isLoading} shopData={shopData} handleSubmit={handleSubmit} handleOnChange={handleOnChange} updateShopData={updateShopData}/>
            }
        </>
    )
}

export default ShopManager;