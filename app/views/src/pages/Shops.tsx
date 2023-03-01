import React from "react";
import ShopList from "../components/Container/Shop/ShopList";
import GoogleMap from "../components/Map/Map";
const Shops = () => (
    <div className="shops">
        <div className="duo">
            <div className="shopslist">
                <ShopList/>
            </div>
            <div className="map">
               <GoogleMap/>
            </div>
        </div>
    </div>
);

export default Shops;