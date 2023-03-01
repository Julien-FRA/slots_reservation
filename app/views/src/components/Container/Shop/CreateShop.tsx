import BtnAdd from '../../Button/BtnAdd';
import CardContainer from '../CardContainer';
import ShopManagerForm from '../../Form/ShopManagerForm';
import LoadSpinner from "../../Inc/LoadSpinner";

const CreateShop = (props:any) => {
  //props.setShopRequestType(true);
  
  return (
    <>
      {props.isLoading ? (
        <LoadSpinner/>
      ) :
      (props.hasShop === false ? 
        <ShopManagerForm setHasShop={props.setHasShop} setAddShop={props.setAddShop} hasShop={props.hasShop} handleSubmit={props.handleSubmit} handleOnChange={props.handleOnChange}/>
        :
        <>
          <CardContainer type="shop" idShop={props.idShop} setIdShop={props.setIdShop} setShopRequestType={props.setShopRequestType} userShopData={props.userShop} setHasShop={props.setHasShop}/>
          <BtnAdd setAddShop={props.setAddShop} setHasShop={props.setHasShop} setShopRequestType={props.setShopRequestType}/>
        </>
      )}
    </>
  );
}

export default CreateShop;