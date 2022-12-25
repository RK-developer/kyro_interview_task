import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Inbox } from "@emotion-icons/material/Inbox";
import { Mail } from "@emotion-icons/material/Mail";
import { styled } from "@mui/material/styles";
import React from "react";

const iconSize = {
    width: "20px",
    height: "20px",
};

const listItemIconStyles = {
    minWidth: "auto",
    marginRight: "5px",
};
const MailIconStyled = styled(Mail)({
    color: "#8f8f8f",
    ...iconSize,
});

const InboxIconStyled = styled(Inbox)({
    ...iconSize,
});
const ListItemTextStyled = styled(ListItemText)({
    "> span": {
        fontSize: "13px",
        color: "#8f8f8f",
    },
});

const MainMenu = () => {
    const menuList = [
        "Home",
        "Projects",
        "Dashboard",
        "Messages",
        "Documnets",
        "Organization",
        "Settings",
    ];
    return (
        <List
            sx={{
                height: "calc(100% - 170px)",
            }}
        >
            {menuList.map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton sx={{ pl: "24px", pr: "24px" }}>
                        <ListItemIcon sx={{ ...listItemIconStyles }}>
                            {index % 2 === 0 ? (
                                <InboxIconStyled />
                            ) : (
                                <MailIconStyled
                                    style={{ width: "20px", height: "20px" }}
                                />
                            )}
                        </ListItemIcon>
                        <ListItemTextStyled primary={text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};

export default MainMenu;
