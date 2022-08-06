import {createContext} from "react";
const UserContext = createContext({
    userBalance: -1,
    setUserBalance: () => {},
});
export default UserContext;
