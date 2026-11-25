import { useState } from "react"
import type { Wallet } from "../types/Wallet";
import HoldingForm from "./HoldingForm";
import type { Holding } from "../types/Holding";

interface WalletCardProps {
    wallet: Wallet,
    onUpdate: (wallet: Wallet) => void
}

export default function WalletCard({ wallet, onUpdate }: WalletCardProps) {
    const [isHoldingModalOpen, setHoldingModal] = useState(false)

    const [additionalValue, setAdditionalValue] = useState('');

    const addHoldingAmount = (holdingId: number, newAmount: number) => {
        onUpdate({...wallet,
            holdings: wallet.holdings.map(holding => (
                holding.id === holdingId ? { ...holding, amount: holding.amount + newAmount } : holding
            ))
        })
    }

    const updateHoldingAmount = (holdingId: number, newAmount: number) => {
        onUpdate({
            ...wallet,
            holdings: wallet.holdings.map(holding =>
                holding.id === holdingId ? { ...holding, newAmount } : holding
            ),
        });
    };

    const addHolding = (assetName: string, amount: number) => {
        const newHolding: Holding = {
            id: 1,
            assetName: assetName,
            amount: amount
        };

        onUpdate({
            ...wallet,
            holdings: wallet.holdings.concat(newHolding)
        })
    }

    return (
    <>
    <section className={wallet.id.toString()}>
        {wallet.id}
        <h2>{wallet.bank}</h2>
        <button onClick={() => setHoldingModal(!isHoldingModalOpen)}>Add holding</button>
        {isHoldingModalOpen ? 
            <HoldingForm
                onCreateHolding={(assetName, assetAmount) => (addHolding(assetName, assetAmount))}/> 
            : <></>
        }
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
                        <td>{holding.assetName}</td>
                        <td>
                            <input type="number" onChange={e => updateHoldingAmount(holding.id, Number(e.target.value))} value={holding.amount}/>
                        </td>
                        <td>
                            <input type="number" onChange={e => setAdditionalValue(e.target.value)}/>
                            <button onClick={() => addHoldingAmount(holding.id, Number(additionalValue))}>Add value</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
    </>
    )
}