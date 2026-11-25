import { useState } from "react";
import { Bank, isValidBank } from "../constants/Bank";

interface WalletFormProps {
    onCreateWallet: (bank: Bank, walletName: string) => void
}

export default function WalletForm({ onCreateWallet } : WalletFormProps) {
    const [bank, setBank] = useState<Bank>();
    const [walletName, setWalletName] = useState("");

    const handleSubmit= (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(isValidBank(bank)) {
            onCreateWallet(bank, walletName);
        }
    }

    return(
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="wallet-name">Wallet Name</label>
        <input id="wallet-name" type="text" onChange={(e) => setWalletName(e.target.value)} required/>

        <label htmlFor="wallet-bank">Bank</label>
        <select value={bank} onChange={e => setBank(e.target.value as Bank)} required>
            <option value={undefined}>Select a Bank</option>
            {Object.values(Bank).map(value => (
                <option value={value}>{value}</option>
            ))}
        </select>

        <button type='submit'>New wallet</button>
    </form>
    </>
    )
}