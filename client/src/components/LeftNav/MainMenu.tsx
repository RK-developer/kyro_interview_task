import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Inbox } from "@emotion-icons/material/Inbox";
import { Mail } from "@emotion-icons/material/Mail";
import { styled } from "@mui/material/styles";

const iconSize = {
    width: "20px",
    height: "20px",
};

const listItemIconStyles = {
    minWidth: "auto",
    marginRight: "5px",
};
const MailIconStyled = styled(Mail)({
    ...iconSize,
});

const InboxIconStyled = styled(Inbox)({
    ...iconSize,
});
const ListItemTextStyled = styled(ListItemText)({
    '> span': {
        fontSize: '14px'
    }
})

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
        <List>
            {menuList.map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton sx={{pl: '24px', pr:'24px'}}>
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
