/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'typewriter-effect/dist/core' {
  export default class Typewriter {
    constructor(element: HTMLElement, options: any);
    typeString(string: string): Typewriter;
    start(): void;
  }
}
