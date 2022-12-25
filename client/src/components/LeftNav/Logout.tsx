import Button from "@mui/material/Button";
import { logout } from "../../utils/common";
import { Delete } from "@emotion-icons/material/Delete";
import { useAppDispatch } from "../../hooks/redux-hooks";
import React from "react";

const LogOut = (props: any) => {
    const dispatch = useAppDispatch();
    const logoutClickHandler = () => {
        logout(dispatch);
    };
    return (
        <>
            <Button
                sx={{
                    color: "#8f8f8f",
                    fontSize: "13px",
                    fontWeight: 600,
                    justifyContent: "start",
                    padding: "10px 24px",
                }}
                onClick={logoutClickHandler}
            >
                <Delete
                    style={{
                        width: "18px",
                        color: "#838080",
                    }}
                />
                Logout
            </Button>
        </>
    );
};

export default LogOut;
