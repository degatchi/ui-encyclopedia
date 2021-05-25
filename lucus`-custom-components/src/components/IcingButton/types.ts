export const scales = {
    MD: "md",
    SM: "sm",
    XS: "xs",
  } as const;

  export type Scale = typeof scales[keyof typeof scales];