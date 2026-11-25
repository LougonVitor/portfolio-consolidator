import { useState } from "react"
import type { Wallet } from "../interfaces/Wallet";

interface WalletCardProps {
    wallet: Wallet,
    onAddAmount: (holdingName: string, amount: number) => void
    onUpdateAmount: (holdingName: string, newAmount: number) => void
}

export default function WalletCard({ wallet, onAddAmount, onUpdateAmount }: WalletCardProps) {
    const [addInputAmount, setAddInputAmount] = useState('');

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
                            <input type="number" onChange={e => onUpdateAmount(holding.name, Number(e.target.value))} value={holding.amount}/>
                        </td>
                        <td>
                            <input type="number" onChange={e => setAddInputAmount(e.target.value)}/>
                            <button onClick={() => onAddAmount(holding.name, Number(addInputAmount))}>Add value</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
    </>
    )
}