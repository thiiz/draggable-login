import { useSignInWindowModeContext } from "@/context/SignInWindowMode";
import { AnimatePresence } from "framer-motion";
import Right from "./Right";
import Left from "./Left";

const ToggleButton = () => {
    const { windowMode } = useSignInWindowModeContext()
    return (
        <AnimatePresence initial={false}>
            {windowMode === "right" ?
                <Right />
                :
                <Left />
            }
        </AnimatePresence>
    )
}

export default ToggleButton