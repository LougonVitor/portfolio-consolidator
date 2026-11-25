import { useState } from "react"
import type { Wallet } from "../types/Wallet";

interface WalletCardProps {
    wallet: Wallet,
    onUpdate: (wallet: Wallet) => void
}

export default function WalletCard({ wallet, onUpdate }: WalletCardProps) {
    const [addInputAmount, setAddInputAmount] = useState('');

    const addAssetAmount = (holdingId: number, newAmount: number) => {
        onUpdate({...wallet,
            holdings: wallet.holdings.map(holding => (
                holding.id === holdingId ? { ...holding, amount: holding.amount + newAmount } : holding
            ))
        })
    }

    const updateAssetAmount = (holdingId: number, amount: number) => {
        onUpdate({
            ...wallet,
            holdings: wallet.holdings.map(holding =>
                holding.id === holdingId ? { ...holding, amount } : holding
            ),
        });
    };

    return (
    <>
    <section className={wallet.id.toString()}>
        {wallet.id}
        <h2>{wallet.bank}</h2>
        <table>
            <thead>
                <tr>
                    <th>Asset</th>
                    <th>Amount</th>
                    <th>Add amount</th>
                </tr>
            </thead>
            <tbody>
                {wallet.holdings.map(holding => (
                    <tr>
                        <td>{holding.name}</td>
                        <td>
                            <input type="number" onChange={e => updateAssetAmount(holding.id, Number(e.target.value))} value={holding.amount}/>
                        </td>
                        <td>
                            <input type="number" onChange={e => setAddInputAmount(e.target.value)}/>
                            <button onClick={() => addAssetAmount(holding.id, Number(addInputAmount))}>Add value</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
    </>
    )
}