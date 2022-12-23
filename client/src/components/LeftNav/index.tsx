import MainMenu from "./MainMenu";
// import LogOut from "./Logout";
import NavHeader from "./NavHeader";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

const LeftNav = (props: any) => {
    const { drawerWidth } = props;
    return (
        <div>
            {/*
            <LogOut/> */}
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
                <Divider />
            </Drawer>
        </div>
    );
};

export default LeftNav;
