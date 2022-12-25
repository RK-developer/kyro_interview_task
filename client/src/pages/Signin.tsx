import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {signInAction} from "../store/actions/auth-action"
import CustomForm from "../components/CustomForm";
import LoaderHOC from "../components/Loader/Loader";
const Signin = (props: any) => {
    const {setLoading} = props;
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
    const {isLoading,isLoggedIn} = useAppSelector(state => state?.userData);
    const signinSubmitHandler = (event:any,finalFormDataValues:any) => {
        dispatch(signInAction(
            {...finalFormDataValues}
        ))
    }

    useEffect(() => {
        setLoading(isLoading)
    },[isLoading])
    return (
        <>
            {
                !isLoggedIn
                &&
                    <CustomForm
                    formStateData={formValue}
                    formHeader={{
                        title: "SIGN IN",
                    }}
                    sx={{ width: "500px", m: "0 auto", height: "calc(100vh - 330px)" }}
                    onSubmit={signinSubmitHandler}
                    formStyle={{height: "calc(100vh - 310px)"}}
                />
            }
        </>
    );
};

export default LoaderHOC(Signin);
