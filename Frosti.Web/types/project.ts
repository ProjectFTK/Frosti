import { ISlug } from "./slug";

export default interface IProject extends ISlug {
    problem: string;
    solution: string;
    admins: string[];
    members: string[];
    commentsCount?: number;
    followersCount?: number;
    tier: string;
}