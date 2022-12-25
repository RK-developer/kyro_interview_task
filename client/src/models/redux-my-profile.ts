import { UserBaseModel } from "./redux-user";

export interface MyProfileModel extends Omit<UserBaseModel, "password"> {}

export interface userToken {
    token: string;
}

export interface MyProfileImageModel {
    name: string | null | undefined;
    profileId: string | null | undefined;
    url: string | null | undefined;
}
