import { useEffect } from "react";
import PopupMessage from "./PopupMessage";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { clearStatusMessage } from "../../store/slices/generic-response-slice";
import { SUCCESS } from "../../store/types";

const PopupSuccessMessage = (props:any) => {
    const {messageData={},delay=3, autoClose=false} = props;
    const dispatch = useAppDispatch();
    const errorOnCloseHandler = () => {
        dispatch(clearStatusMessage());
    }
    const autoClosePopup:any = () => setTimeout(() => errorOnCloseHandler(), delay*1000);
    useEffect(() => {
        if(autoClose) {
            autoClosePopup();
        }
        return () => {
            clearTimeout(autoClosePopup);
        }
    },[]);
    return(
        <PopupMessage
        alertType = "success"
        alertTitle = "Success"
            errorMessage={
                <div>
                    {
                      messageData?.message.type === SUCCESS
                      &&
                      messageData?.message?.msg
                    }
                </div>
            }
            onClose={errorOnCloseHandler}
        />
    )
}

export default PopupSuccessMessage;