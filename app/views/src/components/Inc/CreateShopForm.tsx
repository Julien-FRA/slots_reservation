import { useCallback, useEffect, useState } from "react";
import { CreateShops } from '../../services/ShopRequest';
import { GetUserShop } from '../../services/ShopRequest';
import CardContainer from '../Container/CardContainer';
import CreateShopForm from '../Form/CreateShopForm';
import LoadSpinner from "./LoadSpinner";

const CreateShop = () => {
  const [userShop, setUserShop] = useState<any>([]);
  const [hasShop, setHasShop] = useState<any>();
  const [isLoading, setIsLoading] = useState(false)
  const [shopData, setShopData] = useState<any>({
    iduser: 2, //CHANGE TO URL PARAMS
    name: ' ',
    address:' ',
    service:' '
  });

  /**
   * This function updates shopData hook on event (each time form is modified).
   * @param event
   */
  const handleOnChange = (event:any)=> {
    const value = event.target.value;
    setShopData({
      ...shopData,
      [event.target.name]: value
    });
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
    try {
      await CreateShops(shopJSON);
      setHasShop(true);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }, [shopData]);

  /**
   * This useEffect hook runs each time hasShop state's change, calling hasShopRequest
   * function, to update front in consequence.
   */
  useEffect(() => {
    const hasShopRequest = async() => {
      setIsLoading(true);
      try {
        var result = await GetUserShop();

        if (!result) {
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
      {isLoading ? (
        <LoadSpinner/>
      ) :
      (hasShop === false ? 
        <CreateShopForm hasShop={hasShop} handleSubmit={handleSubmit} handleOnChange={handleOnChange}/>
        : 
        <CardContainer type="shop" userShopData={userShop} updateShopData={updateShopData}/>
      )}
    </>
  );
}

export default CreateShop;