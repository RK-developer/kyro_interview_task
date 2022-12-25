import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = (props: any) => {
    const { auth } = props;
    return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
