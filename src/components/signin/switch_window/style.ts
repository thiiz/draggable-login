import { motion } from "framer-motion";
import Image from "next/image";
import styled, { css } from "styled-components";
import { kanit600 } from "@/fonts";

const SwitchWindowContainer = styled(motion.div) <{ window_mode: string }>`
    position: absolute;
    width: 53%;
    height: 93%;
    transition: right 200ms ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 1rem;
    border-radius: 40px;
    overflow: hidden;
    user-select: none;
    ${p => {
        switch (p.window_mode) {
            case 'left':
                return css`
                    right: 45%;
                `
            default:
                return css`
                    right: 2%;
                `
        }
    }
    }
     &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 2;
    }
`

const SwitchWindowBackground = styled(Image)`
    pointer-events: none;
    object-fit: cover;
    z-index: 1;

`

export { SwitchWindowContainer, SwitchWindowBackground }