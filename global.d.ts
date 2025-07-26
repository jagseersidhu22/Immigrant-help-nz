// global.d.ts
export {};

declare global {
  interface Window {
    chatbase?: {
      (command: string): any;
    };
  }
}
