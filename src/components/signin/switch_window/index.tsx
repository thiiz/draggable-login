import { SwitchWindowContainer, SwitchWindowBackground } from "./style";
import ToggleButton from "./content";
import { AnimatePresence } from "framer-motion";
import { WindowProps, useSignInWindowModeContext } from "@/context/SignInWindowMode";

const SwitchWindow = () => {
    const { windowMode, setWindowMode }: WindowProps = useSignInWindowModeContext()

    const handleChangeSide = (x: number) => {
        if (x > 932) {
            setWindowMode('right');
        } else {
            setWindowMode('left');
        }
    }

    return (
        <SwitchWindowContainer
            window_mode={windowMode}
            drag='x'
            dragConstraints={{
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
            dragElastic={.25}
            onDragEnd={
                (_, info) => handleChangeSide(info.point.x)
            }
        >
            <SwitchWindowBackground src='/memphis-1788465.png' fill alt="Picture of the author" />
            <ToggleButton />
        </SwitchWindowContainer>
    )
}

export default SwitchWindow