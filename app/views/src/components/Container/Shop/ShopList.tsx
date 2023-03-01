import { useCallback, useEffect, useState } from "react";
import { GetAllShops } from '../../../services/ShopRequest';
import { Link } from "react-router-dom";
import {GetShopEmployeeRequest} from "../../../services/EmployeeRequests";


interface Shop {
    idShop: number;
    name: string;
    address: string;
}

function ShopList() {
    const [allshops, setAllShops] = useState<Shop[]>([]);
    const [shopData, setHasShopData] = useState<any>([]);


    useEffect(() => {
        const employeeName = async() => {
            try {
                var response:any = await GetAllShops();
                setAllShops(response);
            } catch (error) {
                console.error(error);
            }
        }
        employeeName();
    }, []);

    return (
        <div>

                {allshops.map(Shop => (
                    <div className="singleShop">
                        <div className="singleShop-data" key={Shop.idShop}>
                            <Link to={`/shop/${Shop.idShop}`}>
                                <div className="duo">

                                        <img src="https://picsum.photos/300/200" alt=""/>
                                        <div className="singleShop-infos">
                                            <strong>{Shop.name}</strong>
                                            {Shop.address}
                                        </div>
                                </div>
                            </Link>
                        </div>
                        </div>
                ))}

    </div>
);
}

export default ShopList;