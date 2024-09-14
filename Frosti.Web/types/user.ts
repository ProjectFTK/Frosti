import { ISlug } from "./slug";

export default interface IUser extends ISlug {
    username: string;
    email?: string | null | undefined;
    referralsCount?: number;
    commentsCount?: number;
    tier: string;
    isAuthenticated: boolean;
}


export interface IAuthor extends ISlug { }