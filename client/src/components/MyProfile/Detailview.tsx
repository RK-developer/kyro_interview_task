import React from "react";
import { useAppSelector } from "../../hooks/redux-hooks";

const DetailView = () => {
    const profileData = useAppSelector(
        (state) => state.profileData.myProfileState
    );
    return (
        <>
            <h4>Detail View</h4>
        </>
    );
};

export default DetailView;
