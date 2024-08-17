  import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
  } from "react";
  import { getProfile } from "@/api/get-profile";

  interface User {
    email: string;
    provider: string;
    uid: string;
    id: number;
    allowPasswordChange: boolean;
    name: string;
    nickname: string | null;
    image: string;
    phone: string;
    documento: string;
    storeName: string;
    address: string;
    complement: string;
    cep: string;
    storeNumber: string;
    state: string;
    city: string;
    createdAt: string;
    updatedAt: string;
  }

  interface UserContextProps {
    user: User | null;
    loading: boolean;
  } 

  const UserContext = createContext<UserContextProps | undefined>(undefined);

  export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchUser = async () => {
        try {
          const profile = await getProfile();
          setUser(profile);
        } catch (error) {
          console.error("Failed to fetch user profile", error);
        } finally {
          setLoading(false);
        }
      };

      fetchUser();
    }, []);

    return (
      <UserContext.Provider value={{ user, loading }}>
        {children}
      </UserContext.Provider>
    );
  };

  export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error("useUser must be used within a UserProvider");
    }
    return context;
  };
