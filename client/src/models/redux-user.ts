export interface UserBaseModel {
    firstName: string;
    lastName: string;
    displayName: string;
    email: string;
    password: string;
    phoneNumber?: number | null | undefined;
    alternatePhoneNumber?: number | null | undefined;
    location?: string | null | undefined;
}

export interface UserSignUpPayLoad
    extends Omit<
        UserBaseModel,
        "displayName" | "phoneNumber" | "alternatePhoneNumber" | "location"
    > {}

export interface UserSignInPayLoad
    extends Omit<UserSignUpPayLoad, "firstName" | "lastName"> {}

export interface UserStateModel {
    statusCode?: string | number | null;
    isLoggedIn?: boolean | null;
    isLoading?: boolean | null;
    isRegisterationSuccess?: boolean | null;
    isLoginSuccess?: boolean | null;
}
