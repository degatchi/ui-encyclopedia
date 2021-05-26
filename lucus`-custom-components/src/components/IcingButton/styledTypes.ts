import { scales, themes } from "./types";

export const scaleVariants = {
    // For modals - confirm & cancel.
    [scales.LG]: { 
        width: '12.25rem',
        icing: {
            left: '-25%',
            height: '550%',
            width: '150%',
            spinDownOn: {
                spinOnTransformStart: 'translateX(-5%) translateY(-40%) rotate(0deg)',
                spinOnTransformEnd: 'translateX(0%) translateY(30%) rotate(390deg)'
            },
            spinDownOff: {
                spinOffTransformStart: 'translateX(0%) translateY(50%) rotate(390deg)',
                spinOffTransformEnd: 'translateX(0%) translateY(110%) rotate(780deg);'
            },
        }
    },
    [scales.MD]: {
        width: '10rem',
        icing: {
            left: '-25%',
            height: '550%',
            width: '150%',
            spinDownOn: {
                spinOnTransformStart: 'translateX(2%) translateY(-35%) rotate(-35deg)',
                spinOnTransformEnd: 'translateX(0%) translateY(30%) rotate(390deg)'
            },
            spinDownOff: {
                spinOffTransformStart: 'translateX(0%) translateY(53%) rotate(390deg)',
                spinOffTransformEnd: 'translateX(0%) translateY(135%) rotate(780deg);'
            },
        }
    },
    // Used for `collect`.
    [scales.SM]: {
        width: '6.5rem',
        icing: {
            left: '-10%',
            height: '300%',
            width: '125%',
            spinDownOn: {
                spinOnTransformStart: 'translateX(-5%) translateY(-58%) rotate(0deg)',
                spinOnTransformEnd: 'translateX(0%) translateY(30%) rotate(390deg)'
            },
            spinDownOff: {
                spinOffTransformStart: 'translateX(0%) translateY(30%) rotate(390deg)',
                spinOffTransformEnd: 'translateX(0%) translateY(110%) rotate(780deg);'
            },
        }
    },
    // Plus & minus icons (cube button).
    [scales.XS]: {
        width: '3rem',
        icing: {
            left: '-30%',
            height: '150%',
            width: '150%',
            spinDownOn: {
                spinOnTransformStart: 'translateX(-10%) translateY(-100%) rotate(0deg)',
                spinOnTransformEnd: 'translateX(0%) translateY(-10%) rotate(390deg)'
            },
            spinDownOff: {
                spinOffTransformStart: 'translateX(0%) translateY(-10%) rotate(390deg)',
                spinOffTransformEnd: 'translateX(-10%) translateY(100%) rotate(780deg);'
            },
        }
    },
  };

// Button specs for toggled theme.
export const themeColors = {
    // LIGHT THEME ON
    [themes.DARK]: {
        background: 'hsl(305, 2%, 19%)',
        color: 'white',
        icingOnColor: 'linear-gradient(to right, hsl(321, 98%, 60%), hsl(321, 98%, 75%))',
        icingOffColor: 'linear-gradient(to right, hsl(321, 98%, 60%), hsl(321, 98%, 75%))'
    },
    // DARK THEME ON
    [themes.LIGHT]: {
        background: 'linear-gradient(to right, hsl(291, 98%, 90%), hsl(291, 98%, 100%))',
        color: 'hsl(305, 2%, 19%)',
        icingOnColor: 'linear-gradient(to right, hsl(321, 98%, 60%), hsl(321, 98%, 75%))',
        icingOffColor: 'linear-gradient(to right, hsl(321, 98%, 60%), hsl(321, 98%, 75%))'
    }
};