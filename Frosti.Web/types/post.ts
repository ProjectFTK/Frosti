import IComment from "./comment";
import { ISlug } from "./slug";
import { IAuthor } from "./user";

export default interface IPost extends IPostLite {
    project: ISlug;
    author: IAuthor;
    problem: string
    content: string //update to lexical?
    commentTop: string //only show the one with most and then expand
    comments: IComment[]
    date: Date
}

interface IPostLite extends ISlug {
    lastResponse: Date
    commentCount: string
}