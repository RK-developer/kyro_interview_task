import CustomForm from "../CustomForm";
import useFormHooks from "../../hooks/useFormHooks";
import { useAppSelector, useAppDispatch } from "../../hooks/redux-hooks";
import { updateProfileDetailsByUserId } from "../../store/actions/my-profile-action";
import LoaderHOC from "../Loader/Loader";
import { useEffect } from "react";
import FormLoader from "../Loader/FormLoader";
const formValue = {
    firstName: {
        value: "",
        label: "First Name",
        error: false,
        errorMessage: "First name is Required",
    },
    lastName: {
        value: "",
        label: "Last Name",
        error: false,
        errorMessage: "Last name is required",
    },
    displayName: {
        value: "",
        label: "Display Name",
        error: false,
        errorMessage: "Display Name is required",
    },
    email: {
        value: "",
        label: "Email",
        error: false,
        errorMessage: "Email is Required",
        errorEmailType: false,
        typeErrorMessage: "Enter a valid email",
    },
    phoneNumber: {
        value: "",
        label: "Phone Number",
    },
    alternatePhoneNumber: {
        value: "",
        label: "Phone Number",
    },
    location: {
        value: "",
        label: "Location",
    },
};

const EditForm = (props: any) => {
    const { setLoading } = props;
    const [stateValue, formData] = useFormHooks(formValue);
    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector((state) => state?.userData);

    const profileUpdateSubmitHandler = (
        event: any,
        finalFormDataValues: any
    ) => {
        dispatch(updateProfileDetailsByUserId({ ...finalFormDataValues }));
    };
    useEffect(() => {
        setLoading(isLoading);
    }, [isLoading]);
    return (
        <>
            {stateValue?.email?.value?.length > 0 ? (
                <CustomForm
                    formStateData={stateValue}
                    formGridColumnType={2}
                    formName="profile"
                    onSubmit={profileUpdateSubmitHandler}
                    formClassName="edit-form"
                />
            ) : (
                <FormLoader
                    containerSx={{
                        width: "500px",
                        m: "50px auto 0px",
                        height: "calc(100vh - 280px)",
                    }}
                />
            )}
        </>
    );
};

export default LoaderHOC(EditForm);
