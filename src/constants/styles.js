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

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
        visibility: visible;

    }
`;

export const fadeOut = keyframes`
    from  {
        opacity: 1;
    }

    to {
        opacity: 0;
        visibility: hidden;

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

export const slideInUp= keyframes`
  from {
    transform: translateY(100%);
    visibility: visible;
  }

  to {
    transform: translateY(0);
  }
`;

export const slideOutUp= keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-100%);
    visibility: hidden;
  }
`;

export const slideInLeft = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const slideOutLeft = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;

export const slideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const slideOutRight = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;
