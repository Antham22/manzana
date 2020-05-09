import { keyframes } from 'styled-components'

// colors
export const BLACK = "#000";
export const LIGHT = '#707070';
export const WHITE = '#fff';
export const LIGHT_BLUE = '#5AC8FA';

// Navbar
export const NAV_HEIGHT = "100px";
export const NAV_BRAND_WIDTH = "40px";

// Pages
export const PAGE_LOGO_WIDTH = "295px";
export const PAGE_SIDEBAR_WIDTH = "100px";

// animations
export const homeIntroAnimationTransition = '1.6s ease-in 0s 1';

export const homeIntroExpandFromTop = keyframes`
0% {
    top: 0;
    margin: 0;
    
}

100% {
    top: calc(${NAV_HEIGHT} + 7px);
    margin: 0 100px ;
}`
;

export const homeIntroScaleFadeInLogo = keyframes`
0% {
    opacity: 0;
    transform: scale(0.5);
}

100% {
    transform: scale(1);
}`
;


export const homeIntroSlideInFromTop = keyframes`
    0% {
        transform: translateY(-100%);
    }
    
    100% {
        transform: translateY(0);
    }
    `;
     
export const homeIntroSlideInIntroText = keyframes`
    0% {
        transform: scale(1.5);
        opacity: 0;
        top: 83%
    }

    100% {
        transform: scale(1);
        opacity: 1;
        top: 53%
    }
`;
