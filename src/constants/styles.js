import { keyframes } from 'styled-components'

// colors
export const BLACK = "#000";
export const GREY = "#CCCCCC";
export const LIGHT = '#707070';
export const LIGHT_BLUE = '#5AC8FA';
export const WHITE = '#fff';

// Navbar
export const NAV_HEIGHT = "100px";
export const NAV_BRAND_WIDTH = "40px";

// Pages and misc
export const PAGE_LOGO_WIDTH = "295px";
export const PAGE_SIDEBAR_WIDTH = "100px";
export const CONTAINER_HEIGHT = `(${NAV_HEIGHT} - 7px)`;

// animations
export const easeInDefault = '1.6s ease-in 0s 1';
export const easeInSec = '1s ease-in 0s 1'

export const homeIntroSlideInContainer = keyframes`
0% {
top: 0;
margin: 0;

}

100% {
top: calc(${NAV_HEIGHT} + 7px);
margin: 0 100px ;
}`
;


export const homeIntroTextPosition = keyframes`
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

export const fadeOut = keyframes`
{
    0% {
        display: flex;
        opacity: 1;
    }
    100% {
        display: none;
        opacity: 0; 
    }
 }`

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

export const custom = keyframes`
0% {
    display:flex;
    transform: translateY(-100%);
}

100% {
    display: flex;
    transform: translateY(0);
}
`;

export const slideUp = keyframes`
0% {
    transform: translateY(300%);
}

100% {
    transform: translateY(0);
}
`;