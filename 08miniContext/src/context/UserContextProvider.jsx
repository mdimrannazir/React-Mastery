import React, { Children } from "react";
import UserContext from "./UserContext";

const UserContextProvier = ({ children }) => {
    const [user, setUser] = React.useState(null)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}



export default UserContextProvier