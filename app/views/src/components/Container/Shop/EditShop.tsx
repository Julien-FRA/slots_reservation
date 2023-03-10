import ShopManagerForm from '../../Form/ShopManagerForm';
import LoadSpinner from "../../Inc/LoadSpinner";

const EditShops = (props:any) => {
  props.setShopRequestType(false);
  return (
    <>
      {props.isLoading ? (
        <LoadSpinner/>
      ) :
        <ShopManagerForm idShop={props.idShop} setHasShop={props.setHasShop} setIdShop={props.setIdShop} setShopRequestType={props.setShopRequestType} userShop={props.userShop} hasShop={props.hasShop} handleSubmit={props.handleSubmit} handleOnChange={props.handleOnChange}/>
      }
    </>
  );
}

export default EditShops;