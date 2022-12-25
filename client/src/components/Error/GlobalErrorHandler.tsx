import { useAppSelector } from "../../hooks/redux-hooks";
import PopupErrorMessage from "../Popup/PopupErrorMessage";
import PopupSuccessMessage from "../Popup/PopupSuccessMessage";
import { FAILED, SUCCESS } from "../../store/types";
import React from "react";
const GlobalErrorhandler = () => {
    const messageData = useAppSelector((state) => state?.messageData);
    return (
        <>
            {messageData &&
                (messageData?.errors ||
                    (messageData?.message &&
                        messageData?.message?.type === FAILED)) && (
                    <PopupErrorMessage messageData={messageData} />
                )}
            {messageData?.message?.type === SUCCESS && (
                <PopupSuccessMessage
                    messageData={messageData}
                    autoClose={true}
                />
            )}
        </>
    );
};

export default GlobalErrorhandler;
