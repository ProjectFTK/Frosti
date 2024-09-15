import http from '../http';
import IUser from '../types/user';

const createBetaRequest = (email: string) => {
    return http.get(`user/BetaRequest?email=${email}`);
};

const getAuthorById = (username: string) => {
    return http.get<IUser>(`user/GetAuthorById?username=${username}`);
};

const currentUser = () => {
    return http.get<IUser>(`user/CurrentUser/`);
};

const UserApi = {
    currentUser,
    getAuthorById,
    createBetaRequest,
};

export default UserApi;