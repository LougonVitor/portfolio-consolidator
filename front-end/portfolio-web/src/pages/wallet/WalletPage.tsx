import { useState } from "react"
import type { Wallet } from "../../interfaces/Wallet";
import WalletCard from "../../components/WalletCard";
import WalletForm from "../../components/WalletForm";

function WalletPage() {
	
	const [wallets, setWallet] = useState<Wallet[]>([
		{ id: 1, bank: 'INTER', name: 'Exchange program', holdings: [{name: 'test', amount: 1200}]}
		, { id: 2, bank: 'ITAU', name: 'Long term', holdings: [{name: 'test', amount: 1200}]}
	]);

	const createWallet = (bankName: string, walletName: string) => {
		const newWallet: Wallet = {
			id: wallets.length + 1,
			bank: bankName,
			name: walletName,
			holdings: []
		}

		setWallet(wallets.concat(newWallet))
	}

    const addAssetAmount = (walletId: number, assetName: string, newAmount: number) => {
        setWallet(prev => (
            prev.map(wallet => (
                wallet.id !== walletId ? wallet : {...wallet, holdings: wallet.holdings.map(holding => (
                    holding.name !== assetName ? holding : {...holding, amount: newAmount + holding.amount}
                ))}
            ))
        ))
    }

	const udpateAssetAmount = (providedWalletId: number, holdingName: string, newAmount: number) => {
        setWallet(prev => (
            prev.map(wallet => (
                wallet.id !== providedWalletId ? wallet : {...wallet, holdings: wallet.holdings.map(holding => (
                    holding.name !== holdingName ? holding : {...holding, amount: newAmount}
                ))}
            ))
        ))
    }

	return (
	<div>
		<h1>Porftolio</h1>
		
		<WalletForm onCreateWallet={(bankName, walletName) => createWallet(bankName, walletName)} />

		{wallets.map(wallet => (
			<WalletCard
				key={wallet.id}
				wallet={wallet}
				onAddAmount={(holdingName, amount) => addAssetAmount(wallet.id, holdingName, amount)}
				onUpdateAmount={(holdingName, amount) => udpateAssetAmount(wallet.id, holdingName, amount)}
			/>
		))}
		
	</div>
	)
}

export default WalletPage;