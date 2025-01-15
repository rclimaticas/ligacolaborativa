// globals.d.ts ou arquivo de tipos correspondente

import type { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider | undefined;
  }
}
