import { css, styled } from "styled-components";

const RegisterContainer = styled.div<{
    email_error: string;
    password_error: string;
    cf_password_error: string;
}>`
    max-width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .register-title-container{
        color: #f1f5f9;
        margin-bottom: 1.5rem;
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
        switch (p.email_error) {
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
        switch (p.password_error) {
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
.cf_password-input{
    ${p => {
        switch (p.cf_password_error) {
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

.user-label {
    position: absolute;
    left: 10px;
    background-color: #1f1f1f;
    user-select: none;
    transform: translateY(-1.3rem);
    transition: 150ms cubic-bezier(0.4,0,0.2,1);
    padding-inline: 4px;
    border-radius: 30px;
}

.email-label{
    ${p => {
        switch (p.email_error) {
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
        switch (p.password_error) {
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
.cf_password-label{
    ${p => {
        switch (p.cf_password_error) {
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
    font-size: 1.21rem;
    text-align: center;
    margin-top: .5rem;

    a {
        color: #fdfdfd
    }
}

.submitButtonContainer{
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}
.auth-options {
    margin-top: 1rem;
}
`

const SigninWithText = styled.div`
    position: relative;
    user-select: none;
    text-align: center;
    font-size: 1.25rem;
    margin-top: 1.8rem;
    color: #fdfdfd;
    opacity: 0.65;
    &::before{
        content: '';
        position: absolute;
        width: 90px;
        height: .7px;
        background-color: #fdfdfd;
        top: 9.5px;
        right: -98px;
        opacity: 0.4;
    }
    &::after{
        content: '';
        position: absolute;
        width: 90px;
        height: .7px;
        background-color: #fdfdfd;
        top: 9.5px;
        left: -98px;
        opacity: 0.4;
    }
`
const LabelTerms = styled.label<{ terms_error: string }>`
    margin-top: .5rem;
    width: 100%;
    display: flex;
    align-items: center;

 input {
 opacity: 0;
 cursor: pointer;
 position: relative;
}
.terms-text {
    text-align: center;
    font-size: 1.3rem;
    color: #fdfdfd;

    a {
        color: #fdfdfd;
    }
}

/* Create a custom checkbox */
.checkmark {
 position: relative;
 top: 0;
 left: 0;
 height: 2.09rem;
 width: 3.25rem;
 min-width: 2.08rem;
 opacity: .3;
 ${p => {
        switch (p.terms_error) {
            case "true":
                return css`
                    background-color:#ff3333;
            `
            default:
                return css`
                    background-color: #fdfdfd;
                `
        }
    }}
 transition: all 0.3s;
 border-radius: 5px;
}

/* When the checkbox is checked, add a blue background */
& input:checked ~ .checkmark {
 background-color: #3ec187;
 opacity: 1;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
 content: "";
 position: absolute;
 display: none;
}

/* Show the checkmark when checked */
& input:checked ~ .checkmark:after {
 display: block;
}

/* Style the checkmark/indicator */
& .checkmark:after {
 left: 0.45em;
 top: 0.25em;
 width: 0.25em;
 height: 0.5em;
 border: solid white;
 border-width: 0 0.15em 0.15em 0;
 transform: rotate(45deg);
}
`

export { RegisterContainer, SigninWithText, LabelTerms }