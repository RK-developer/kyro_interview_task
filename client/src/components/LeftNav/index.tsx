import MainMenu from "./MainMenu";
import LogOut from "./Logout";
import NavHeader from "./NavHeader";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import React from "react";

const LeftNav = (props: any) => {
    const { drawerWidth } = props;
    return (
        <div>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <NavHeader />
                <MainMenu />
                <LogOut />
            </Drawer>
        </div>
    );
};

export default LeftNav;
