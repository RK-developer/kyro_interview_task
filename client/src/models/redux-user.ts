export interface UserBaseModel {
    firstName: string,
    lastName: string,
    displayName: string,
    email: string,
    password: string
    phoneNumber?: number | null | undefined,
    alternatePhoneNumber?: number | null | undefined,
    location?: string | null | undefined,
}

export interface UserSignUpModel {
    statusCode: string | number | null,
    status: boolean | null
}

export interface UserSignInModel extends UserSignUpModel {}