import BtnAdd from '../Button/BtnAdd';
import CardContainer from '../Container/CardContainer';
import CreateShopForm from '../Form/CreateShopForm';
import LoadSpinner from "./LoadSpinner";

const CreateShop = (props:any) => {
  props.setShopRequestType(true);
  return (
    <>
      {props.isLoading ? (
        <LoadSpinner/>
      ) :
      (props.hasShop === false ? 
        <CreateShopForm updateShopData={props.updateShopData} setAddShop={props.setAddShop} hasShop={props.hasShop} handleSubmit={props.handleSubmit} handleOnChange={props.handleOnChange}/>
        :
        <>
          <CardContainer type="shop" setIdShop={props.setIdShop} setShopRequestType={props.setShopRequestType} userShopData={props.userShop} updateShopData={props.updateShopData}/>
          <BtnAdd updateShopData={props.updateShopData} setAddShop={props.setAddShop} setHasShop={props.setHasShop} setShopRequestType={props.setShopRequestType}/>
        </>
      )}
    </>
  );
}

export default CreateShop;