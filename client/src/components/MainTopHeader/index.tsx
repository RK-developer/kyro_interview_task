import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Add } from "@emotion-icons/material/Add";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import {
    appBarStyleProps,
    addStyled,
    rightCol,
} from "../../utils/styled/mainTopHeader";

import { useAppSelector } from "../../hooks/redux-hooks";
import { getCurrentDateWithDefineFormat } from "../../utils/common";
import React from "react";

const AddStyled = styled(Add)(addStyled());
const RightCol = styled("div")(rightCol());
const MainTopHeader = (props: any) => {
    const { drawerWidth } = props;
    const { myProfileState: profileData } = useAppSelector(
        (state) => state.profileData
    );
    return (
        <>
            <AppBar
                position="fixed"
                sx={appBarStyleProps({
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                    pt: "10px",
                    pb: "10px",
                })}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>
                        Good Morning, {profileData.displayName}
                    </Typography>
                    <Typography
                        variant="body2"
                        display="block"
                        gutterBottom
                        sx={{ fontSize: "13px", color: "#858585" }}
                    >
                        {getCurrentDateWithDefineFormat()}
                    </Typography>
                </Box>
                <RightCol>
                    <Box component="span">
                        <Button
                            variant="contained"
                            startIcon={<AddStyled />}
                            sx={{ fontSize: "10px" }}
                            color="error"
                        >
                            ADD PROJECT
                        </Button>
                    </Box>
                    <Box
                        component="span"
                        sx={{ display: "flex", alignItems: "center" }}
                    >
                        <Avatar
                            sx={{ borderRadius: "6px", mr: "10px" }}
                            variant="square"
                        >
                            A
                        </Avatar>
                        <Box>
                            <Typography variant="body2" display="block">
                                {profileData.displayName}
                            </Typography>
                            <Typography
                                variant="body2"
                                display="block"
                                sx={{ fontSize: "12px", color: "#807c7c" }}
                            >
                                Project Manager
                            </Typography>
                        </Box>
                    </Box>
                </RightCol>
            </AppBar>
        </>
    );
};

export default MainTopHeader;
