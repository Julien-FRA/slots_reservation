import { DropdownButton, Dropdown } from "react-bootstrap"

const ShopsDropdown = (props: any) => {
    const selectedShop = (id: number) => {
        props.setSetSelectedShop(id);
    }
    return (
        <DropdownButton id="dropdown-basic-button" title="Select your shop">
            {props.shopData.map((shop:any) => (
                <Dropdown.Item onClick={() => selectedShop(shop.idShop)} href={"#/shop-" + shop.idShop}>{shop.name}</Dropdown.Item>
            ))}
        </DropdownButton>
    )
}

export default ShopsDropdown;