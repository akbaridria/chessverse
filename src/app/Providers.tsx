'use client'

import * as React from 'react'
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { goerli, mantleTestnet, polygonMumbai } from 'viem/chains'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [goerli, polygonMumbai, mantleTestnet],
  [publicProvider()],
)

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains })
  ],
  publicClient,
  webSocketPublicClient,
})

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return <WagmiConfig config={config}>{mounted && children}</WagmiConfig>
}