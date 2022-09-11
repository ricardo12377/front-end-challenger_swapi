import { createContext, ReactNode, useState } from "react";

type UserContextProps = {
  children: ReactNode;
};

type UserContextType = {
  page: boolean;
  setPage: (value: boolean) => void;
  url: string;
  setUrl: (value: string) => void;
  personUrl: string;
  setPersonUrl: (value: string) => void;
};

export const ContentContext = createContext<UserContextType>(
  {} as UserContextType
);

export const ContentProvider = ({ children }: UserContextProps) => {
  const [page, setPage] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const [personUrl, setPersonUrl] = useState<string>("");

  return (
    <ContentContext.Provider
      value={{
        page,
        setPage,
        url,
        setUrl,
        personUrl,
        setPersonUrl,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};
