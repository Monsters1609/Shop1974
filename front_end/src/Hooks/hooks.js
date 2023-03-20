import { useContext } from "react";
import { DataProvider } from "../Data/Provider/providerApp";
const useContextDataAll = () => {
    const [dataAll, dispatch] = useContext(DataProvider)
    return [dataAll, dispatch]
}
export {
    useContextDataAll,
}