import { css, styled, keyframes } from "styled-components";
import { poppins300, roboto300 } from "@/fonts";


const buttonLoadingSpinner = keyframes`
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
`;

const SignInContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1024px;
    min-height: 612px;
    padding: 0 86px;
    background-color: #1f1f1f;
    border-radius: 7px;
    overflow: hidden;
    ${poppins300.style}
    box-shadow: rgba(250, 250, 250, 0.3) 0px 2px 4px, rgba(250, 250, 250, 0.2) 0px 7px 13px -3px, rgba(250, 250, 250, 0.1) 0px -3px 0px inset;


  .user-label {
    position: absolute;
    left: 10px;
    background-color: #1f1f1f;
    pointer-events: none;
    transform: translateY(-1.3rem);
    transition: transform 150ms cubic-bezier(0.4,0,0.2,1);
    padding-inline: 3px;
    user-select: none;
}
    .inputsContainer{
        display: flex;
        flex-direction: column;
        row-gap: 1.8rem;
    }
    .input-group {
     position: relative;
}
.input {
    border: none;
    border-radius: .3rem;
    background: none;
    padding: 1rem;
    font-size: 1.7rem;
    width: 28rem;
    color: #e8e8e8;
    transition: border 150ms cubic-bezier(0.4,0,0.2,1);
}
.input:focus {
    outline: 2px solid #1a73e8;
    }
.input:focus ~ .user-label {
    color: #1a73e8;
    transform: translateY(-1.5rem);
}
    .submitButtonContainer{
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}
.submitButton{
  position: relative;
  cursor: pointer;
  width: 100%;
  border: none;
  background: #333;
  color: #f1f5f9;
  padding: 1em;
  font-weight: bold;
  transition: 0.2s;
  border-radius: 5px;
  opacity: 0.7;
  letter-spacing: 1px;
  user-select: none;
    &:hover {
    opacity: 1;
    }

    &:active {
    top: 2px;
    box-shadow: #333 0px 3px 2px, #f1f5f9 0px 3px 5px;
    }
}
.btnLoading {
	position: relative;
	border: none;
}

.btnLoading .btnText {
	transition: all 0.2s;
    visibility: hidden;
	opacity: 0;
}


.btnLoading::after {
	content: "";
	position: absolute;
	width: 16px;
	height: 16px;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	border: 4px solid transparent;
	border-top-color: #f1f5f9;
	border-radius: 50%;
	animation: ${buttonLoadingSpinner} 1s ease infinite;
}
`
const Message = styled.p<{ is_error: string }>`
  ${p => {
    switch (p.is_error) {
      case "true":
        return css`
          color: #ff3333;
        `
      default:
        return css`
          color: #00FF00;
        `
    }
  }}
  text-align: end;
  margin-bottom: 1.3rem;
  ${roboto300.style}
  `

export { SignInContainer, Message }