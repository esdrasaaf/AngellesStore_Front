import React, { createContext } from "react";
import useToken from "../hooks/useToken";

export const UserInfoContext = createContext ({})

function UserInfoProvider ({children}) {
    const token = useToken();

    const config = {
        headers: {
            Authorization: `Bearer ${token} `
        }
    }

    return (
        <UserInfoContext.Provider value={{ config }}>
            {children}
        </UserInfoContext.Provider>
    )
}

export default UserInfoProvider