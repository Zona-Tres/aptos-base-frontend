import React from 'react'
import ReactDOM from 'react-dom/client'
import { PetraWallet } from "petra-plugin-wallet-adapter"
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react"
import App from './App.tsx'

const wallets = [new PetraWallet()]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
      <App />
    </AptosWalletAdapterProvider>
  </React.StrictMode>,
)
