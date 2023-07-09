import { WindowProps, useSignInWindowModeContext } from "@/context/SignInWindowMode"
import { zodResolver } from "@hookform/resolvers/zod"
import { signInWithEmailAndPassword } from "firebase/auth"
import { ChangeEvent, useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Inputs, SiginInputs, createLoginFormSchema } from "./types"

const useLogin = () => {
    const { windowMode, setWindowMode }: WindowProps = useSignInWindowModeContext()
    const { register, setValue, setError, handleSubmit, formState: { errors, isSubmitting } } = useForm<SiginInputs>({
        resolver: zodResolver(createLoginFormSchema),
        mode: 'all',
        criteriaMode: 'all',
        shouldFocusError: false,
        defaultValues: { email: '', password: '' } as SiginInputs,
    })
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValue(name as Inputs, value)
    }

    const onSubmit: SubmitHandler<SiginInputs> = async (data) => {
        try {
            // const res = await signInWithEmailAndPassword(auth, data.email, data.password);
            return;
        } catch (error: any) {
            if (error.message == "Firebase: Error (auth/user-not-found)."
                ||
                error.message == "Firebase: Error (auth/wrong-password)."
            ) {
                setError("root", {
                    type: "error",
                    message: "Email address or password invalid.",
                });
                return;
            }
            if (
                error.message ==
                "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
            ) {
                setError("root", {
                    type: "error",
                    message: "Too many requests, please try again later",
                });
                return;
            }
            setError("root", {
                type: "error",
                message: "Login attempts unsuccessful. Please try again later.",
            });
        }
    };

    useEffect(() => {
        if (windowMode === 'user-registred') {
            setError('root', { type: 'success', message: 'Registration successful!' });
            setWindowMode('right')
        }
    }, [windowMode])

    return {
        windowMode,
        isSubmitting,
        errors,
        handleChangeInput,
        register,
        onSubmit,
        handleSubmit
    }
}

export { useLogin }