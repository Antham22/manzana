import { keyframes } from 'styled-components'

// colors
export const BLACK = "#000";
export const GREY = "#CCCCCC";
export const ALT_GREY = '#999999';
export const LIGHT = '#707070';
export const LIGHT_BLUE = '#5AC8FA';
export const RED = '#FF3B30';
export const WHITE = '#fff';

// Navbar
export const NAV_HEIGHT = "100px";
export const NAV_BRAND_WIDTH = "40px";

// Pages and misc
export const BACKGROUND_BLUE = "transparent linear-gradient(180deg, #5ac8fa -25%, #ffffff00 76%) 0% 0% no-repeat padding-box"
export const BACKGROUND_GREY = "transparent linear-gradient(90deg, #f2f2f2 0%, #ffffff00 100%) 0% 0% no-repeat padding-box";
export const CONTAINER_HEIGHT = `(${NAV_HEIGHT} - 7px)`;
export const PAGE_LOGO_WIDTH = "295px";
export const PAGE_SIDEBAR_WIDTH = "100px";
export const APPLE_LOGO_CUSTOM = {
    position: 'absolute',
    top: '23%',
    right: '30%',
    zIndex: -1,
    opacity: 0.3,
    width: '165px',
  };

// animations
export const easeInDefault = '1.6s ease-in 0s 1';
export const easeInSec = '1s ease-in 0s 1'

export const slideUpHomeIntroText = keyframes`
    0% {
        top: 83%
    }

    100% {
        top: 51%
    }
`;

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;

    }
`;

export const scaleDown = keyframes`
    0% {
        transform: scale3d(2, 2,2);

    100% {
        transform: scale3d(1);   
    }
`;
    
export const scaleUp = keyframes`
    0% {
        transform: scale(1.5);

    100% {
        transform: scale(1);
    }
`;

export const slideDown = keyframes`
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(0);
    }
`;

export const slideInHomeIntro = keyframes`
    0% {
        margin: 0;
    }

    100% {
        margin: 107px 100px 0 ;
    }`
;

export const slideUp = keyframes`
    0% {
        transform: translateY(300%);
    }

    100% {
        transform: translateY(0);
    }
`;