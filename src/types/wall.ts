export interface  IProspect {
    name: string;
    email?: string;
};

export interface  ICompany {
    name: string;
    email?: string;
};

export interface WallProps {
    prospects?: IProspect[];
    companies?: ICompany[];
};
