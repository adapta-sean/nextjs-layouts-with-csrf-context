import {createContext, ReactNode, useState} from 'react';

type CsrfTokenContextType = {
    csrfToken: string | null,
    setCsrfToken: (token: string | null) => void
}

const defaultProps: CsrfTokenContextType = {
    csrfToken: null,
    setCsrfToken: () => {
    },
};

export const CsrfTokenContext = createContext<CsrfTokenContextType>(defaultProps);

type CsrfTokenProps = { children: ReactNode }

export default function CsrfTokenProvider({children}: CsrfTokenProps) {
    const [csrfToken, setCsrfToken] = useState<string | null>(null);

    return (
        <CsrfTokenContext.Provider value={{csrfToken, setCsrfToken}}>
            {children}
        </CsrfTokenContext.Provider>
    );
}
