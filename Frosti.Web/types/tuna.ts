// User Interface
export interface FrostUser {
    name: string;
}

// Task Interface
export interface Task {
    targetDate: Date;
    title: string;
    description: string;
    assignedTo: FrostUser;
    createdBy: FrostUser;
    state: string;
    stateDetails: string;
    id: string;
    projectId: string;
}

// Project Interface
export interface Project {
    tasks: Task[];
    id: string;
}

// Team Interface
export interface Team {
    members: FrostUser[];
    manager: FrostUser;
}