export interface  IProspect {
    name: string;
};

export interface  ICompany {
    name: string;
    location: string;
};

export interface WallProps {
    prospects: IProspect[];
    companies: ICompany[];
};
