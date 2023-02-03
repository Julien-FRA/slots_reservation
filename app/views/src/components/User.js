import React, { useState, useEffect } from "react";
import axios from "axios";
//import fetchUser from "../router/User";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await axios.get("http://localhost:3200/api/users");
            setUsers(data);
        })();
    }, []);
    console.log("this is users", users)
    if (!users) return <div>Loading...</div>;

    return (
        <div>
            {users.data ? users.data.map(user => (
                <p>{user.name} {user.email}</p>
            )) : ''}
        </div>
    );
};
