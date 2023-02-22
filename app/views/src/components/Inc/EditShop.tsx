import CreateShopForm from '../Form/CreateShopForm';
import LoadSpinner from "./LoadSpinner";

const EditShops = (props:any) => {
  props.setShopRequestType(false);
  return (
    <>
      {props.isLoading ? (
        <LoadSpinner/>
      ) :
        <CreateShopForm setIdShop={props.setIdShop} setShopRequestType={props.setShopRequestType} userShop={props.userShop} hasShop={props.hasShop} handleSubmit={props.handleSubmit} handleOnChange={props.handleOnChange}/>
      }
    </>
  );
}

export default EditShops;