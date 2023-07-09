import { ImArrowRight2 } from "react-icons/im"
import { ButtonToggle, SwitchWindowTitle } from "./style"
import { useAnimations } from "./useAnimations"
import { useSignInWindowModeContext } from "@/context/SignInWindowMode"

const Left = () => {
    const {
        initialTitle,
        animateTitle,
        exitTitle,
        initialLeftButton,
        animateButton,
        exitLeftButton
    } = useAnimations()
    const { toggleSide } = useSignInWindowModeContext()

    return (
        <>
            <SwitchWindowTitle
                key="left-title"
                initial={initialTitle}
                animate={animateTitle}
                exit={exitTitle}
            >Already have an account?
            </SwitchWindowTitle >
            <ButtonToggle
                onClick={toggleSide}
                initial={initialLeftButton}
                animate={animateButton}
                exit={exitLeftButton}
                transition={{ duration: .2 }}
                key="left-button"
                name="login-button"
            >
                <p className="login-text" translate="no">Login</p>
                <ImArrowRight2 className="arrow" />
            </ButtonToggle >
        </>
    )
}

export default Left