/// <reference types="vite/client" />

declare module "*.module.scss" {
  export const classes: { [key: string]: string };
}
