import { RegisterContainer, LabelTerms } from "./style";
import { Message } from "../style";
import { useRegister } from "./useRegister";
import { WindowProps, useSignInWindowModeContext } from "@/context/SignInWindowMode";

const Register = () => {
    const { windowMode }: WindowProps = useSignInWindowModeContext()
    const {
        errors,
        isSubmitting,
        register,
        setFocus,
        onSubmit,
        handleChangeInput,
        handleSubmit
    } = useRegister()

    return (
        <RegisterContainer
            email_error={errors.email ? "true" : "false"}
            password_error={errors.password ? "true" : "false"}
            cf_password_error={errors.cf_password ? "true" : "false"}
        >
            {windowMode == 'left' ?
                <>
                    <div className="register-title-container">
                        <h1>Join us today</h1>
                        <p>Get started by creating your account.</p>
                    </div>

                    {errors.root ? <Message is_error={errors.root.type == 'error' ? "true" : "false"}>{errors.root?.message}</Message> : ''}
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='inputsContainer'>
                            <div className="input-group">
                                <input {...register("email")} onChange={handleChangeInput} type="email" className='input email-input' autoComplete='off' disabled={isSubmitting} />
                                <label onClick={() => setFocus('email')} className='user-label email-label'>{errors.email ? errors.email.message : 'Email'}</label>
                            </div>

                            <div className="input-group">
                                <input {...register("password")} onChange={handleChangeInput} type="password" className='input password-input' autoComplete='off' disabled={isSubmitting} />
                                <label onClick={() => setFocus('password')} className='user-label password-label'>{errors.password ? errors.password.message : 'Password'}</label>
                            </div>

                            <div className="input-group">
                                <input {...register("cf_password")} onChange={handleChangeInput} type="password" className='input cf_password-input' autoComplete='off' disabled={isSubmitting} />
                                <label onClick={() => setFocus('cf_password')} className='user-label cf_password-label'>{errors.cf_password ? errors.cf_password.message : 'Confirm password'}</label>
                            </div>
                        </div>

                        <LabelTerms terms_error={errors.terms ? "true" : "false"}>
                            <input {...register('terms')} className="terms" type="checkbox" />
                            <div className="checkmark"></div>
                            <p className="terms-text">When you sign up, you agree to our <a href="#terms">terms of use</a> and <a href="#policy">privacy policy</a></p>
                        </LabelTerms>

                        <div className="submitButtonContainer">
                            <button value="Log in" className={`submitButton ${isSubmitting ? 'btnLoading' : ''}`} type="submit" disabled={isSubmitting} >
                                <span className="btnText">Sign up</span>
                            </button>
                        </div>

                    </form>
                </>
                :
                ''
            }
        </RegisterContainer>
    )
}

export default Register