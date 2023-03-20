import {createContext, useReducer} from 'react'
import { initStateDataAll, reducerDataAll } from '../Store';
const DataProvider = createContext()
function ProviderApp ({children}) {
    const [dataAll, dispatch] = useReducer(reducerDataAll,initStateDataAll)
    return(
        <DataProvider.Provider value={[dataAll, dispatch]}>
            {children}
        </DataProvider.Provider>
    )
}
export {DataProvider};
export default ProviderApp;