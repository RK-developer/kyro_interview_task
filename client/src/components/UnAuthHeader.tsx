import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo from "../components/LeftNav/Logo";
import React from "react";
const UnAuthHeader = (props: any) => {
    const { authBtnText, authBtnLink } = props;
    const verticalCenter = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    };
    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: "#f5f5f5",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                color: "#7a7474",
                height: "50px",
                pl: "20px",
                pr: "20px",
            }}
        >
            <Box sx={verticalCenter}>
                <Logo styles={{ width: "80px" }} />
            </Box>
            <Box sx={verticalCenter}>
                <Button component={Link} to={authBtnLink}>
                    {authBtnText}
                </Button>
            </Box>
        </AppBar>
    );
};

export default UnAuthHeader;
