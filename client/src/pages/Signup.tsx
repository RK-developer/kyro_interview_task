import { useEffect } from "react";
import CustomForm from "../components/CustomForm";
import LoaderHOC from "../components/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { signUpAction } from "../store/actions/auth-action";

const Signup = (props: any) => {
    const { setLoading } = props;
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
        email: {
            value: "",
            label: "Email",
            error: false,
            errorMessage: "Email is Required",
            errorEmailType: false,
            typeErrorMessage: "Enter a valid email",
        },
        password: {
            value: "",
            label: "Password",
            error: false,
            errorMessage: "Password Should not be empty",
        },
    };
    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector((state) => state?.userData);
    const signupSubmitHandler = (event: any, finalFormDataValues: any) => {
        dispatch(signUpAction({ ...finalFormDataValues }));
    };

    useEffect(() => {
        setLoading(isLoading);
    }, [isLoading]);

    return (
        <CustomForm
            formStateData={formValue}
            formHeader={{
                title: "Sign Up",
            }}
            sx={{ width: "500px", m: "0 auto" }}
            onSubmit={signupSubmitHandler}
        />
    );
};

export default LoaderHOC(Signup);
