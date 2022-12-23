import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {signInAction} from "../store/actions/auth-action"
import CustomForm from "../components/CustomForm";

const Signin = (props: any) => {
    const formValue = {
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
    const loginStore = useAppSelector(state => state);
    const signinSubmitHandler = (event:any,finalFormDataValues:any) => {
        debugger;
        console.log("finalFormDataValues: ", finalFormDataValues);
        dispatch(signInAction(
            {...finalFormDataValues}
        ))
    }

    useEffect(() => {
        console.log("loginStore: ", loginStore);
    },[loginStore])
    return (
        <CustomForm
            formStateData={formValue}
            formHeader={{
                title: "Sign In",
            }}
            sx={{ width: "500px", m: "0 auto", height: "calc(100vh - 330px)" }}
            onSubmit={signinSubmitHandler}
        />
    );
};

export default Signin;
