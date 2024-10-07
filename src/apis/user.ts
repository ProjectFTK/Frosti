import http from '../http';
import IUser from '../types/user';

const addContorUserToWaitlist = (email: string) => {
    return http.get(`user/AddContorUserToWaitlist?email=${email}`);
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
    addContorUserToWaitlist,
};

export default UserApi;