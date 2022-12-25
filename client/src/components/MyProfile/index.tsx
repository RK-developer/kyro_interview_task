import React from "react";
import DetailView from "./Detailview";
import EditForm from "./EditForm";
import Typography from "@mui/material/Typography";
const MyProfile = (props: any) => {
    const { isShowEditForm } = props;
    return (
        <>
            <Typography
                component="h6"
                sx={{ pt: "10px", fontWeight: 600, fontSize: "14px" }}
            >
                My Profile
            </Typography>
            {!isShowEditForm ? <DetailView /> : <EditForm />}
        </>
    );
};

export default MyProfile;
