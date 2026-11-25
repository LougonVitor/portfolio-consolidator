import { useState } from "react"
import type { Wallet } from "../../interfaces/Wallet";
import WalletCard from "../../components/WalletCard";
import WalletForm from "../../components/WalletForm";
import { Bank } from "../../constants/Bank";

function WalletPage() {
	
	const [wallets, setWallet] = useState<Wallet[]>([
		{ id: 1, bank: Bank.Inter, name: 'Exchange program', holdings: [{name: 'test', amount: 1200}]}
		, { id: 2, bank: Bank.Itau, name: 'Long term', holdings: [{name: 'test', amount: 1200}]}
	]);

	const createWallet = (bank: Bank, walletName: string) => {
		const newWallet: Wallet = {
			id: wallets.length + 1,
			bank: bank,
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
		
		<WalletForm onCreateWallet={(bank, walletName) => createWallet(bank, walletName)} />

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