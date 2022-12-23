import React from "react";
import { useLocation } from "react-router-dom";
import "./assets/css/common/flex-styles.css";
import "./assets/css/common/typo-styles.css";
import "./App.css";
import MainRoute from "./router";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useAppSelector } from "./hooks/redux-hooks";
import PopupErrorMessage from "./components/Popup/PopupErrorMessage";

const mainTopHeaderPreload = import("./components/MainTopHeader");
const leftNamPreload = import("./components/LeftNav");
const MainTopHeader = React.lazy(() => mainTopHeaderPreload);
const LeftNav = React.lazy(() => leftNamPreload);

const commonStyleOfGrid = {
    height: "100%",
};
const RootContainer = styled(Box)({
    height: "calc(100vh - 64px)",
});
const LeftNavGrid = styled(LeftNav)({
    //position: 'fixed',
    //width: '240px',
    paddingRight: "20px",
    "> div": {
        ...commonStyleOfGrid,
    },
});
const MainSectionGrid = styled(MainRoute)({
    ...commonStyleOfGrid,
});

function App(props: any) {
    const drawerWidth: number = 290;
    const location = useLocation();
    const messageData = useAppSelector(state => state?.messageData);
    const pathList = ["/login", "/signup"];
    const pathName = pathList.includes(location.pathname);
    return (
        <div className="App">
            <RootContainer sx={{ display: "flex" }}>
                {
                    (messageData && (messageData?.errors || messageData?.message))
                    &&
                    <PopupErrorMessage
                    messageData={messageData}
                    />
                }
                {!pathName && (
                    <>
                        <React.Suspense>
                            <MainTopHeader drawerWidth={drawerWidth} />
                        </React.Suspense>
                        <React.Suspense>
                            <LeftNavGrid drawerWidth={drawerWidth} />
                        </React.Suspense>
                    </>
                )}

                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        bgcolor: "background.default",
                        height: "100%",
                        pt: "64px",
                    }}
                >
                    <MainSectionGrid />
                </Box>
            </RootContainer>
        </div>
    );
}

export default App;
