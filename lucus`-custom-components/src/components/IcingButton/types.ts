export const scales = {
  LG: 'lg',
  MD: 'md',
  SM: 'sm',
  XS: 'xs',
} as const;

export const themes = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type Scale = typeof scales[keyof typeof scales];
export type Theme = typeof themes[keyof typeof themes];
