import http from '../http';
import IMessage from '../types/message';
import IResource from '../types/resource';

const chat = (message: IMessage, provider: string) => {
    return http.post<IMessage>(`frosti/chat`, {
        query: message,
        provider: provider,
    });
};

const getResources = () => {
    return http.get<IResource[]>(`frosti/GetResourcesForUser`);
};

const FrostiApi = {
    chat,
    getResources,
};

export default FrostiApi;