import { scales, themes } from "./types";

export const scaleVariants = {
    [scales.MD]: {
      height: "48px",
      padding: "0 24px",
    },
    [scales.SM]: {
      height: "32px",
      padding: "0 16px",
    },
    [scales.XS]: {
      height: "20px",
      fontSize: "12px",
      padding: "0 8px",
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