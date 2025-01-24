declare module 'flipdown' {
  export default class FlipDown {
    constructor(utcEndTime: number, elementId?: string);

    start(): FlipDown;

    ifEnded(callback: () => void): FlipDown;

    version(): string;
  }
}
