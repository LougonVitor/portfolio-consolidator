import { useState } from "react";

interface WalletFormProps {
    onCreateWallet: (bank: string, walletName: string) => void
}

export default function WalletForm({ onCreateWallet } : WalletFormProps) {
    const [bank, setBankName] = useState('');
    const [walletName, setWalletName] = useState("");

    return(
    <>
        <label htmlFor="wallet-bank">Bank</label>
        <input id="wallet-bank" type="text" onChange={(e) => setBankName(e.target.value)}/>

        <label htmlFor="wallet-name">Name</label>
        <input id="wallet-name" type="text" onChange={(e) => setWalletName(e.target.value)}/>

        <button onClick={() => onCreateWallet(bank, walletName)}>New wallet</button>
    </>
    )
}