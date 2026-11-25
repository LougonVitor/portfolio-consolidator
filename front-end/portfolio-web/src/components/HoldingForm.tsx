import { useState } from "react"

interface HoldingFormProps {
    onCreateHolding: (asset: string, amount: number) => void
}

export default function HoldingForm({ onCreateHolding } : HoldingFormProps) {
    const [asset, setAsset] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        onCreateHolding(asset, amount);
    }

    return (
    <>
    <form onSubmit={handleSubmit}>
        <label>Asset name</label>
        <input type="text" onChange={e => setAsset(e.target.value)}/>
        <label>Amount</label>
        <input type="number" onChange={e => setAmount(Number(e.target.value))}/>

        <button type="submit">Submit</button>
    </form>
    </>
    )
}