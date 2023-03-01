import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { GetSingleShop } from '../services/ShopRequest';
import Calendar from "./dashboard-nested-pages/Calendar";
interface Shop {
    idShop: number;
    name: string;
    address: string;
    service: string;
}

function SingleShop() {
    const { shopId } = useParams();
    const [singleshop, setSingleShop] = useState<Shop>();

    useEffect(() => {
        const fetchSingleShop = async () => {
            try {
                const response: any = await GetSingleShop(shopId);
                setSingleShop(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchSingleShop();
    }, []);

    return (
        <div className="container">
            <h2>{singleshop?.name}</h2>
            <p>{singleshop?.address}</p>
            <p>{singleshop?.service}</p>

            <Calendar />

        </div>
    );
}

export default SingleShop;
