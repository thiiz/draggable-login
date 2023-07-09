import { kanit600 } from "@/fonts";
import { motion } from "framer-motion";
import { styled } from "styled-components";

const SwitchWindowTitle = styled(motion.span)`
    z-index: 2;
    font-size: 4.93rem;
    max-width: 87%;
    text-align: center;
    color: #fff;
    line-height: 50px;
    text-transform: uppercase;
    font-weight: 600;
    ${kanit600.style}
`
const ButtonToggle = styled(motion.button)`
  --primary-color: #ccc;
  --hovered-color: #fff;
  padding: 0;
  margin: 0;
  border: none;
  background-color: #00000090;
  position: relative;
  display: flex;
  font-weight: 600;
  font-size: 3rem;
  padding: 1rem 3.5rem;
  gap: 0.5rem;
  align-items: center;
  z-index: 2;
  cursor: pointer;  
  ${kanit600.style}
& p {
  margin: 0;
  position: relative;
  font-size: 20px;
  color: var(--primary-color)
}

&::after {
  position: absolute;
  content: "";
  width: 0;
  left: 0;
  bottom: -3px;
  background-color: var(--hovered-color);
  height: 2px;
  
  transition: 0.3s ease-out;
}

& .login-text::before {
  position: absolute;
/*   box-sizing: border-box; */
  content: "Login";
  width: 0%;
  inset: 0;
  color: var(--hovered-color);
  overflow: hidden;
  transition: 0.3s ease-out;
}
& .register-text::before {
  position: absolute;
  content: "Register";
  width: 0%;
  inset: 0;
  color: var(--hovered-color);
  overflow: hidden;
  transition: 0.3s ease-out;
}

&:hover::after {
  width: 100%;
}

&:hover p::before {
  width: 100%;
}

&:hover svg {
  color: var(--hovered-color)
}

& .arrow {
  color: var(--primary-color);
  transition: 0.2s;
  position: relative;
  width: 15px;
  transition-delay: 0.2s;
}
`

export { ButtonToggle, SwitchWindowTitle }