import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { DefaultLayout } from '../Components/DefaultLayout';
import { publicRouter } from './path';
function RouterApp () {
    const [statePath, setStatePath] = useState([])
    useEffect(()=>{
        setStatePath(publicRouter)
    },[])
    return (
        <Router>
            {statePath.map((value,index)=>{
                const Layout = value.layout ?? DefaultLayout
                const Page = value.component
                return (
                    <Routes key={index}>
                        <Route path={value.path} element={
                            <Layout>
                                <Page/>
                            </Layout>
                        }/>
                    </Routes>
                )
            })}
        </Router>
    )
}
export default RouterApp;