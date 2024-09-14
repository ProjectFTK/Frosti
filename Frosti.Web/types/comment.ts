export default interface IComment {
    userId?: string;
    comId?: string;
    fullName?: string;
    avatarUrl?: string;
    text?: string;
    userProfile?: string;
    replies?: IReply[];
}

interface IReply {
    userId: string;
    comId: string;
    fullName: string;
    avatarUrl: string;
    text: string;
    userProfile?: string;
}