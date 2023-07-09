import { LoginContainer } from "./style";
import { Message } from "../style";
import { useLogin } from "./useLogin";


const Login = () => {
    const { errors, isSubmitting, onSubmit, handleChangeInput, windowMode, register, handleSubmit } = useLogin()

    return (
        <LoginContainer
            root_error={errors.root ? errors.root.type == "error" ? "true" : "false" : "false"}
            email_error={errors.email ? "true" : "false"}
            password_error={errors.password ? "true" : "false"}
        >
            {windowMode == 'right' ?
                <>
                    <div className="login-title-container">
                        <h1>Welcome back</h1>
                        <p>Please enter your contact details to connect.</p>
                    </div>
                    {errors.root ? <Message is_error={errors.root.type == 'error' ? "true" : "false"}>{errors.root?.message}</Message> : ''}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='inputsContainer'>
                            <div className="input-group">
                                <input {...register("email")} onChange={handleChangeInput} type="email" className='input email-input' autoComplete='email' disabled={isSubmitting} />
                                <label className='user-label email-label'>{errors.email ? errors.email.message : 'Email'}</label>
                            </div>

                            <div className="input-group">
                                <input {...register("password")} onChange={handleChangeInput} type="password" className='input password-input' autoComplete='current-password' disabled={isSubmitting} />
                                <label className='user-label password-label'>{errors.password ? errors.password.message : 'Password'}</label>
                            </div>
                        </div>
                        <p className="warnTerms">When you log in, you agree to our <a href="#terms">terms of use</a> and <a href="#policy">privacy policy</a>.</p>
                        <div className="submitButtonContainer">
                            <button value="Log in" className={`submitButton ${isSubmitting ? 'btnLoading' : ''}`} type="submit" disabled={isSubmitting} >
                                <span className="btnText">Log in</span>
                            </button>
                        </div>
                    </form>
                </>
                :
                ''
            }
        </LoginContainer>
    )
}

export default Login