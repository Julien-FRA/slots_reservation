import React, { useState } from 'react';
import {Link, redirect} from 'react-router-dom';
import axios from 'axios';

type Shop = {
    idShop: number;
    name: string;
}

const ShopSelector: React.FC = () => {
    const [shopName, setShopName] = useState<string>('');
    const [shops, setShops] = useState<Shop[]>([]);
    const [selectedShop, setSelectedShop] = useState<number|null>(null);

    const handleShopNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value;
        console.log(name)
        setShopName(name);
        axios.get<Shop[]>(`http://localhost:3200/api/shops`)
            .then(response => {
                setShops(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleShopSelection = (e: React.MouseEvent<HTMLButtonElement>) => {
        const shopId = Number(e.currentTarget.value);
        setSelectedShop(shopId);
    };

    if (selectedShop) {
        return <Link to={`/shops/${selectedShop}`} />;
    }

    return (
        <div>
            <input placeholder="Un nom" id="shopName" type="text" value={shopName} onChange={handleShopNameChange} />

                {shops.map(shop => (
                    <div className="shopResult" key={shop.idShop}>
                        <Link to={`/shop/${shop.idShop}`} data-shop-id={shop.idShop}>
                            {shop.name}
                        </Link>
                    </div>
                ))}

        </div>
    );
};

export default ShopSelector;