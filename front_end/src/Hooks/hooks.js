import { useContext } from "react";
import { DataProvider } from "../Data/Provider/providerApp";
import { HandleChangeProvider } from "../Data/Provider/providerApp";
const useContextDataAll = () => {
    const [dataAll, dispatch] = useContext(DataProvider);
    return [dataAll, dispatch]
}
const useContextHandleChange = () => {
    const [HandleChange, dispatchHandleChange] = useContext(HandleChangeProvider);
    return [HandleChange, dispatchHandleChange]
}
export {
    useContextDataAll,
    useContextHandleChange,
}