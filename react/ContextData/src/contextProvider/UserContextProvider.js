import { useMemo, useState } from "react";
import { UserContext } from "../context/UserContext";


export function UserContextProvider({ children }) {
    const [user, setUser] = useState({});
    
    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
};