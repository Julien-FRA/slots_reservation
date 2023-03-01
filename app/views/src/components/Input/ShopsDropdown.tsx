import { DropdownButton, Dropdown } from "react-bootstrap"

const ShopsDropdown = (props: any) => {
    console.log("ShopsDropdown", props)
    
    return (
        <DropdownButton id="dropdown-basic-button" title="Select your shop">
            {props.userShop.map((shop:any) => (
                <Dropdown.Item key={shop.idShop} onClick={() => (props.setUserIdShop(shop.idShop))} href={"#/shop-" + shop.idShop}>{shop.name}</Dropdown.Item>
            ))}
        </DropdownButton>
    )
}

export default ShopsDropdown;