import { useEffect, useState, useRef } from "react";
import { getProfileDetailsByUserId } from "../store/actions/my-profile-action";
import { useAppDispatch, useAppSelector } from "./redux-hooks";

function mergeObject(initialObj: any, updateObj: any) {
    const finalObj = { ...initialObj };
    const isNotNull = initialObj && updateObj;
    const isPropertyCheck =
        Object.keys(initialObj).length > 1 && Object.keys(updateObj).length > 1;
    if (isNotNull && isPropertyCheck) {
        Object.keys(updateObj).forEach((value: string) => {
            finalObj[value] = {
                ...finalObj[value],
                value: updateObj[value],
            };
        });
    }
    return finalObj;
}

const useFormHooks = (formInitilaData: any, callback?: any) => {
    const { myProfileState: profileData } = useAppSelector(
        (state) => state?.profileData
    );

    let data: any;
    if (profileData && Object.keys(profileData).length > 0) {
        data = mergeObject(formInitilaData, profileData);
    }

    const [values, setValues] = useState(data);

    const dispatch = useAppDispatch();
    const apiDataFetchRef = useRef(false);
    useEffect(() => {
        if (apiDataFetchRef.current) return;
        apiDataFetchRef.current = true;
        dispatch(getProfileDetailsByUserId());
    }, [dispatch]);

    useEffect(() => {
        setValues(data);
    }, [profileData]);

    return [values, data];
};

export default useFormHooks;
