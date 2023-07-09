import { css, styled } from "styled-components";

const LoginContainer = styled.div<{
    root_error: string;
    email_error: string;
    password_error: string;
}>`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .login-title-container{
        color: #f1f5f9;
        margin-bottom: 5rem;
        h1{
            font-size: 4.04rem;
            text-align: center;
        }
        p {
            text-align: center;
            font-size: 1.35rem;
            opacity: .65;
        }
    }



.email-input{
    ${p => {
        switch (p.email_error || p.root_error) {
            case "true":
                return css`
                      outline: solid 1.5px #ff3333;
                    `
            default:
                return css`
                    outline: solid 1.5px #9e9e9e;
                    `
        }
    }}
}
.password-input{
    ${p => {
        switch (p.password_error || p.root_error) {
            case "true":
                return css`
                      outline: solid 1.5px #ff3333;
                    `
            default:
                return css`
                    outline: solid 1.5px #9e9e9e;
                    `
        }
    }}
}

.email-label{
    ${p => {
        switch (p.email_error || p.root_error) {
            case "true":
                return css`
                    color: #ff3333;
            `
            default:
                return css`
                    color: #e8e8e8;
                `
        }
    }}
}
.password-label{
    ${p => {
        switch (p.password_error || p.root_error) {
            case "true":
                return css`
                    color: #ff3333;
            `
            default:
                return css`
                    color: #e8e8e8;
                `
        }
    }}
}
.warnTerms {
    color: #fdfdfd;
    font-size: 1.21rem;
    text-align: center;
    margin-top: .5rem;

    a {
        color: #f1f5f9
    }
}
.auth-options {
    margin-top: 2rem;
}
`

const SigninWithText = styled.div`
    position: relative;
    text-align: center;
    font-size: 1.25rem;
    margin-top: 2.5rem;
    color: #f1f5f9;
    opacity: .65;
    &::before{
        content: '';
        position: absolute;
        width: 90px;
        height: .7px;
        background-color: #f1f5f9;
        top: 9.5px;
        right: -98px;
        z-index: 999;
        opacity: 0.4;
    }
    &::after{
        content: '';
        position: absolute;
        width: 90px;
        height: .7px;
        background-color: #f1f5f9;
        top: 9.5px;
        left: -98px;
        z-index: 999;
        opacity: 0.4    ;
    }
`

export { LoginContainer, SigninWithText }