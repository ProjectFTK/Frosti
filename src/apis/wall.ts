import http from '../http';
import { IProspect, ICompany, WallProps } from '../types/wall';

const addProspectAsync = (prospect: IProspect) => {
    return http.post(`wall/addProspectAsync`, prospect);
};

const addCompanyAsync = (company: ICompany) => {
    return http.post(`wall/addCompanyAsync`, company);
};

const getTheWall = () => {
    return http.get<WallProps>(`wall/GetTheWall`);
};

const WallApi = {
    getTheWall,
    addProspectAsync,
    addCompanyAsync,
};

export default WallApi;