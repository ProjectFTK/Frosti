
import React, { useState, useMemo } from 'react';
import UserApi from '../apis/user';
import { useLocalStorage } from '../components/LocalStorage/LocalStorage';

// create context
interface IUserContext {
    name: string | undefined;
    username: string | undefined;
    avatarUrl: string | undefined;
    isPremium: boolean | undefined;
    isAuthenticated: boolean | null;
    isLoading: boolean;
    SignIn: () => void;
    SignOut: () => void;
}

export const UserContext = React.createContext<IUserContext>({
    name: '',
    username: '',
    avatarUrl: '',
    isAuthenticated: null,
    isPremium: false,
    isLoading: true,
    SignIn: () => { },
    SignOut: () => { },
});

interface IUserPovider {
    children: React.ReactNode;
}

export const UserProvider = ({ children }: IUserPovider) => {
    const [name, setName] = useLocalStorage<string>('ftkName');
    const [username, setusername] = useLocalStorage<string>('ftkusername');
    const [avatarUrl, setAvatarUrl] = useLocalStorage<string>('ftkUserAvatar');
    const [isPremium, setIsPremium] = useLocalStorage<boolean>('ftkIsPremium');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    function SignIn() {
        window.location.href = 'https://api.tryfrosti.com/Auth/GoogleLogin';
    }

    function SignOut() {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = 'https://api.tryfrosti.com/Auth/GoogleSignOut';
    }
    useMemo(() => {
        UserApi.currentUser()
            .then((response) => {
                setName(response.data.name);
                setusername(response.data.username);
                setAvatarUrl(response.data.avatarUrl);
                setIsAuthenticated(response.data.isAuthenticated);
                setIsLoading(false);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }, []);

    const value = useMemo(
        () => ({
            name,
            username,
            avatarUrl,
            isPremium,
            isAuthenticated,
            isLoading,
            SignIn,
            SignOut,
        }),
        [SignIn, SignOut]
    );

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};