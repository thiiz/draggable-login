import { createContext, ReactNode, useContext, useState } from "react";

export interface WindowProps {
    setWindowMode: React.Dispatch<React.SetStateAction<string>>;
    windowMode: string;
}

const SignInWindowModeContext = createContext<any>(null as any)


const SignInWindowModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [windowMode, setWindowMode] = useState<WindowProps['windowMode']>('right')

    const toggleSide = () => {
        if (windowMode == 'left') {
            setWindowMode('right');
        } else {
            setWindowMode('left');
        }
    }


    const state = {
        windowMode,
        setWindowMode,
        toggleSide
    }

    return (
        <SignInWindowModeContext.Provider value={state}>
            {children}
        </SignInWindowModeContext.Provider>
    )
}
export const useSignInWindowModeContext = () => {
    const context = useContext(SignInWindowModeContext)
    const {
        windowMode,
        setWindowMode,
        toggleSide
    } = context;
    return {
        windowMode,
        setWindowMode,
        toggleSide
    }
}
export default SignInWindowModeProvider