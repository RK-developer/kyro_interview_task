import CustomForm from "../CustomForm"
const EditForm = (props:any) => {
    const formValue = {
        firstName: {
            value: "",
            label:"First Name",
            error: false,
            errorMessage: "First name is Required",
        },
        lastName: {
            value: "",
            label:"Last Name",
            error: false,
            errorMessage: "Last name is required",
        },
        displayName: {
            value: "",
            label:"Display Name",
            error: false,
            errorMessage: "Display Name is required",
        },
        email: {
            value: "",
            label:"Email",
            error: false,
            errorMessage: "Email is Required",
            errorEmailType: false,
            typeErrorMessage: "Enter a valid email",
        },
        phoneNumber1: {
            value: "",
            label:"Phone Number",
            error: false,
            errorMessage: "Atleat One Phone number is required",
        },
        phoneNumber2: {
            value: "",
            label:"Phone Number",
            error: false,
            errorMessage: "Atleast one phone number is required",
        },
        location: {
            value: "",
            label:"Location",
        },
    }
    return (
        <>
            <CustomForm
                formStateData={formValue}
                formGridColumnType={2}
            />
        </>
    );
};

export default EditForm;
