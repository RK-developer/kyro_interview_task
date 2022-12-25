export interface FieldType {
    value: string | number | null;
    label: string;
    error?: boolean;
    errorMessage?: string;
    errorEmailType?: boolean;
    typeErrorMessage?: string;
}
interface FormValue {
    [firstName: string]: FieldType;
    lastName: FieldType;
    displayName: FieldType;
    email: FieldType;
    phoneNumber: FieldType;
    alternatePhoneNumber: FieldType;
    location: FieldType;
}
export interface FormValueForEdit extends FormValue {}

export interface FormValueForSignin
    extends Omit<
        FormValue,
        | "firstName"
        | "lastName"
        | "displayName"
        | "phoneNumber"
        | "alternatePhoneNumber"
        | "location"
    > {}

export interface FormValueForSignup
    extends Omit<
        FormValue,
        "displayName" | "phoneNumber" | "alternatePhoneNumber" | "location"
    > {}
