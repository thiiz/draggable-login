import { ImArrowLeft2 } from "react-icons/im"
import { ButtonToggle, SwitchWindowTitle } from "./style"
import { useSignInWindowModeContext } from "@/context/SignInWindowMode";
import { ToggleSideFunction } from "./types";
import { useAnimations } from "./useAnimations";

const Right: React.FC = () => {
    const { toggleSide }: ToggleSideFunction = useSignInWindowModeContext()
    const {
        exitRightButton,
        initialRightButton,
        animateButton,
        initialTitle,
        animateTitle,
        exitTitle
    } = useAnimations()

    return (
        <>
            <SwitchWindowTitle
                key="right-title"
                initial={initialTitle}
                animate={animateTitle}
                exit={exitTitle}
            >Create an account to start!
            </SwitchWindowTitle>
            <ButtonToggle
                onClick={toggleSide}
                initial={initialRightButton}
                animate={animateButton}
                exit={exitRightButton}
                transition={{ duration: .28 }}
                key="right-button"
                name="register-button"
            >
                <ImArrowLeft2 className="arrow" />
                <p className="register-text" translate="no">Register</p>
            </ButtonToggle >
        </>
    )
}

export default Right