// User Interface
export interface IAuthor {
    name: string;
    id: string;
}

// Team Interface
export interface Team {
    members: IAuthor[];
    manager: IAuthor;
    projects: IProject[];
    id: string;
}

export interface IProject {
    id: string;
    name: string;
    state: string;
    description: string | null;
    owner: IAuthor;
    materials: IMaterial[] | null
    createTime: Date | string;
}

export default interface IMaterial {
    id: string;
    type: MaterialType;
    title: string;
    description: string | null;
    path: string | null;
    targetDate: Date | null;
    assignedTo: IAuthor | null | undefined;
    createdBy: IAuthor | null;
    state: string | null;
    children: IMaterial[] | null
}

export enum MaterialType {
    Task,   //equivalent to a file in file/folder struct
    Cluster, //equivalent to a folder in file/folder struct
}

/*
export interface IProjectMaterials {
  [key: string]: IMaterial[];
}

export interface IDashboardResponse
{
repos: IProject[],
followingRepos: IProject[],
materials: IProjectMaterials
}
*/