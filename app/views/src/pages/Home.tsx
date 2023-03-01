import React from "react";
import {Link} from "react-router-dom";
import StoreSelect from "../components/Select/SelectShop";
import ShopSelector from "../components/Select/SelectShop";
const Home = () => (
    <div className="homepage">
        <div className="fading">
            <h1>CergyOnHair</h1>
            <div className="homepageContent">
                <h2>Rechercher par</h2>
                <div className="duo">
                    <ShopSelector></ShopSelector>
                    <Link className="ShopsInput" to={`/shops`}>
                        <input placeholder="Votre adresse" type="text"/>
                    </Link>

                </div>
            </div>
        </div>
    </div>
);

export default Home;