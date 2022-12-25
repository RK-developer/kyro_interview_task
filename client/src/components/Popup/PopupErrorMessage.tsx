import React, { Children } from "react";
import PopupMessage from "./PopupMessage";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { clearStatusMessage } from "../../store/slices/generic-response-slice";

const PopupErrorMessage = (props: any) => {
    const { messageData = {} } = props;
    const dispatch = useAppDispatch();
    const errorOnCloseHandler = () => {
        dispatch(clearStatusMessage());
    };
    return (
        <PopupMessage
            errorMessage={
                <div>
                    {messageData?.errors &&
                        Children.toArray(
                            messageData?.errors?.map(
                                (errMsg: any, index: any) => {
                                    return <div>{errMsg.msg}</div>;
                                }
                            )
                        )}
                    {messageData?.message && messageData?.message?.msg}
                </div>
            }
            onClose={errorOnCloseHandler}
        />
    );
};

export default React.memo(PopupErrorMessage);
