import CustomForm from "../components/CustomForm";


const Signup = (props: any) => {
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
    const signupSubmitHandler = (event:any,finalFormDataValues:any) => {
        console.log("finalFormDataValues: ", finalFormDataValues);
    }
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

export default Signup;
