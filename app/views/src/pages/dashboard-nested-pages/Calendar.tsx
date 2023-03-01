import React, { useEffect, useState } from "react";
import CalendarManager from "../../components/Container/Appointment/CalendarManager";
import { GetUserShopRequest } from "../../services/ShopRequest";

const Calendar = () => {
    const [hasShop, setHasShop] = useState<boolean>(false);
    const [shopData, setHasShopData] = useState<any>([]);
    useEffect(() => {
        
        const hasShopRequest = async() => {
            try {
                var result = await GetUserShopRequest(); //add user ID in this func

                if (!result) {
                    setHasShop (false);
                } else {
                    setHasShop(true);
                    setHasShopData(result);
                }
            } catch (error) {
                console.error(error);
            }
        }
        hasShopRequest()
    }, [hasShop]);
    const shopProps:any = {
        shopData: {shopData}
    }
    return (
        <div className="calendar-dashboard-nested-page">
            <h1>Appointment calendar</h1>
            {hasShop ? <CalendarManager {...shopProps} /> : ''/*here add like a link button to take us to shop creation*/}
            
        </div>
    )
};

export default Calendar;