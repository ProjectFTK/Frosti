import React, { useState, useMemo, Dispatch, SetStateAction } from 'react';
import UserApi from '../apis/user';
import { useLocalStorage } from '../components/LocalStorage/LocalStorage';

// create context
interface IUserContext {
  name: string | undefined;
  username: string | undefined;
  avatarUrl: string | undefined;
  schoolRole: string | undefined;
  isPremium: boolean | undefined;
  isAuthenticated: boolean | null;
  isLoading: boolean;
  likes: string[];
  follows: string[];
  SignIn: () => void;
  SignOut: () => void;
}

export const UserContext = React.createContext<IUserContext>({
  name: '',
  username: '',
  avatarUrl: '',
  schoolRole: '',
  isAuthenticated: null,
  isPremium: false,
  isLoading: true,
  likes: [],
  follows: [],
  SignIn: () => {},
  SignOut: () => {},
});

interface IUserPovider {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: IUserPovider) => {
  const [name, setName] = useLocalStorage<string>('ftkName');
  const [username, setusername] = useLocalStorage<string>('ftkusername');
  const [avatarUrl, setAvatarUrl] = useLocalStorage<string>('ftkUserAvatar');
  const [schoolRole, setSchoolRole] = useLocalStorage<string>('ftkSchoolRole');
  const [isPremium, setIsPremium] = useLocalStorage<boolean>('ftkIsPremium');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [likes, setLikes] = useState<string[]>([]);
  const [follows, setFollows] = useState<string[]>([]);

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
      schoolRole,
      isPremium,
      isAuthenticated,
      isLoading,
      likes,
      follows,
      SignIn,
      SignOut,
    }),
    [SignIn, SignOut]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
