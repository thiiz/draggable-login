export const useAnimations = () => {
    const animateButton = {
        x: 0,
        opacity: 1,
        display: "inherit",
        transition: {
            delay: .25
        }
    };

    const initialRightButton = {
        x: 1000,
        opacity: 0,
        display: "none",
    };
    const exitRightButton = {
        x: 1000,
        opacity: 0,
        transitionEnd: {
            display: "none"
        }
    };

    const initialLeftButton = {
        x: -1000,
        opacity: 0,
        display: "none",
    };

    const exitLeftButton = {
        x: -1000,
        opacity: 0,
        transitionEnd: {
            display: "none"
        }
    };

    const initialTitle = {
        y: -1000,
        opacity: 1,
        display: "block",
    };

    const animateTitle = {
        y: 0,
        opacity: 1,
        display: "block"
    };
    const exitTitle = {
        y: -1000,
        opacity: 0,
        transitionEnd: {
            display: "none"
        }
    };
    return {
        initialTitle,
        animateTitle,
        exitTitle,
        animateButton,
        initialRightButton,
        exitRightButton,
        initialLeftButton,
        exitLeftButton
    }
}