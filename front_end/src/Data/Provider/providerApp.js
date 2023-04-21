import {createContext, useReducer} from 'react'
import { 
    initStateDataAll,
    reducerDataAll, 
    reducerHandleChange, 
    initStateHandleChange 
} from '../Store';
const DataProvider = createContext();
const HandleChangeProvider = createContext()
function ProviderApp ({children}) {
    const [dataAll, dispatch] = useReducer(reducerDataAll, initStateDataAll)
    const [HandleChange, dispatchHandleChange] = useReducer(reducerHandleChange, initStateHandleChange)
    console.log(HandleChange,dataAll);
    return(
        <DataProvider.Provider value={[dataAll, dispatch]}>
            <HandleChangeProvider.Provider value={[HandleChange, dispatchHandleChange]}>
                {children}
            </HandleChangeProvider.Provider>
        </DataProvider.Provider>
    )
}
export {
    DataProvider,
    HandleChangeProvider,
};
export default ProviderApp;