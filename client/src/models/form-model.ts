export interface FieldType {
    value: string | number | null;
    label: string,
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
    phoneNumber1: FieldType;
    phoneNumber2: FieldType;
    location: FieldType;
}
export interface FormValueForEdit extends FormValue {}

export interface FormValueForSignin extends Omit<FormValue, 'firstName' | 'lastName' | 'displayName' | 'phoneNumber1' | 'phoneNumber2' | 'location'> {}

export interface FormValueForSignup extends Omit<FormValue, 'displayName' | 'phoneNumber1' | 'phoneNumber2' | 'location'> {}