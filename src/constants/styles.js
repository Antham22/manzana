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
export const BACKGROUND_BLUE = "transparent linear-gradient(180deg, #5ac8fa -25%, #ffffff00 85%) 0% 0% no-repeat padding-box"
export const BACKGROUND_GREY = "transparent linear-gradient(90deg, #f2f2f2 0%, #ffffff00 100%) 0% 0% no-repeat padding-box";
export const CONTAINER_HEIGHT = `(${NAV_HEIGHT} - 7px)`;
export const PAGE_LOGO_WIDTH = "295px";
export const PAGE_SIDEBAR_WIDTH = "100px";

// animations
export const easeInDefault = '1.5s ease-in 0s 1';
export const linkTransitionTime ='0.3s ease-in-out'

export const homeIntroText = keyframes`
   from {
        transform: scale(1.3) translateY(150px);
        opacity: 0;
    }

    to {
        transform: scale(1) translateY(0);
        opacity: 1;
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

export const fadeOut = keyframes`
    from  {
        visibility: visible;
        opacity: 1;
    }

    to {
        visibility: hidden;
        opacity: 0;

    }
`;
    
export const scaleUp = keyframes`
    from {
        transform: scale(0.5);

    to {
        transform: scale(1);
    }
`;

export const slideDown = keyframes`
  from {
        transform: translateY(-100%);
    }

    to {
        transform: translateY(0);
    }
`;

export const slideInHomeIntro = keyframes`
    from {
        margin: 0;
        transform: translateY(-100px);
    }

    to {
        margin: 0 ${PAGE_SIDEBAR_WIDTH};
        transform: translateY(0);
    }`
;

export const slideDownHomeWelcome = keyframes`
    from {
        transform: translate(-50%, -100%);
        opacity: 0;
    }

    to {
        transform: translate(-50%, -50%);
        opacity: 1;
    }
`;

export const slideUpHomeProductsLink = keyframes`
    from {
        transform: translate(-50%, 150%);
        opacity: 0;
    }

    to {
        transform: translate(-50%, -50%);
        opacity: 1;
    }
`;

export const scaleDownHomePageSlider = keyframes`
    from {
        transform: scale(2);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
`;
