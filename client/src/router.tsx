import React,{Suspense} from 'react';
import {Route, Routes } from "react-router-dom";
const PageNotFound = React.lazy(() => import('./components/PageNotFound'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Login = React.lazy(() => import("./pages/Signin"));
const Signup = React.lazy(() => import("./pages/Signup"));
const MainRoute = () => {
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </Suspense>
        
    )
}

export default MainRoute;