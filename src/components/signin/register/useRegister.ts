import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Inputs, SiginInputs, createRegisterFormSchema } from "./types";
import { ChangeEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { WindowProps, useSignInWindowModeContext } from "@/context/SignInWindowMode";

const useRegister = () => {
    const { setWindowMode }: WindowProps = useSignInWindowModeContext()
    // const [
    //     createUserWithEmailAndPassword,
    // ] = useCreateUserWithEmailAndPassword(auth);
    const { register, setFocus, setValue, setError, handleSubmit, formState: {
        errors,
        isSubmitting,
    } } = useForm<SiginInputs>({
        resolver: zodResolver(createRegisterFormSchema),
        mode: 'all',
        criteriaMode: 'all',
        shouldFocusError: false,
        defaultValues: { email: '', password: '', cf_password: '', terms: false } as SiginInputs,
    })

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValue(name as Inputs, value)
    }

    const onSubmit: SubmitHandler<SiginInputs> = async (data) => {
        try {
            const signInMethods = [''] // await fetchSignInMethodsForEmail(auth, data.email);
            if (signInMethods.length > 0) {
                // Email already in use, return an error
                setError('email', { type: 'error', message: "Email already in use." });
            } else {
                // Email available, proceed with registration
                // const userCredential = await createUserWithEmailAndPassword(data.email, data.password);
                setWindowMode('user-registred')
            }
        } catch (error: any) {
            if (error.code === 'auth/network-request-failed') {
                setError('root', { type: 'error', message: 'Could not verify email address. Please try again later.' });
            } else if (error.code === 'auth/too-many-requests') {
                setError('root', { type: 'error', message: 'Too many requests, please try again later.' });
            } else {
                setError('root', { type: 'error', message: 'Registration attempts unsuccessful. Please try again later.' });
            }
        }
    };
    return {
        setFocus,
        errors,
        isSubmitting,
        register,
        onSubmit,
        handleChangeInput,
        handleSubmit,
    }
}

export { useRegister }