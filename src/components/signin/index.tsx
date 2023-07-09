'use client'

import Login from "./login";
import Register from "./register";
import { SignInContainer } from "./style";
import SwitchWindow from "./switch_window";
import SignInWindowModeProvider from "@/context/SignInWindowMode";

export default function SignIn() {
    return (
        <>
            <SignInWindowModeProvider>
                <SignInContainer>
                    <Login />
                    <Register />
                    <SwitchWindow />
                </SignInContainer>
            </SignInWindowModeProvider>
        </>
    )
}