import { Navigate, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import UnAuthHeader from "./UnAuthHeader";
import { styled } from "@mui/material";
import React from "react";

const AuthFormWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "calc(100vh - 104px)",
    form: {
        width: "420px",
    },
});
const UnAuth = (props: any) => {
    const { auth, authBtnText, authBtnLink } = props;
    return auth ? (
        <>
            <UnAuthHeader authBtnText={authBtnText} authBtnLink={authBtnLink} />
            <AuthFormWrapper>
                <Outlet />
            </AuthFormWrapper>
        </>
    ) : (
        <Navigate to="/" />
    );
};

export default UnAuth;
