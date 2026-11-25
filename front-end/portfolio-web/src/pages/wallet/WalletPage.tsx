import { useState } from "react";
import WalletCard from "../../components/WalletCard";
import WalletForm from "../../components/WalletForm"
import type { Wallet } from "../../types/Wallet";
import { Bank } from "../../constants/Bank";

function WalletPage() {
	const [wallets, setWallets] = useState<Wallet[]>([
		{ id: 1, bank: Bank.Inter, name: 'Exchange program', holdings: [{id: 1, assetName: 'test', amount: 1200}]}
		, { id: 2, bank: Bank.Itau, name: 'Long term', holdings: [{id: 2, assetName: 'test', amount: 1200}]}
	])

	const onUpdateWallet = (updatedWallet: Wallet) => {
		setWallets(prevWallets => prevWallets.map(wallet =>
			wallet.id === updatedWallet.id ? updatedWallet : wallet
		));
	};
	
	return (
	<div>
		<h1>Create new portfolio</h1>
		<WalletForm wallets={wallets} onCreate={(newWallet) => setWallets(prevWallets => [...prevWallets, newWallet])}/>

		<br />
		<br />
		<br />

		<h1>Portfolios</h1>
		{wallets.map(wallet => (
			<WalletCard
				key={wallet.id}
				wallet={wallet}
				onUpdate={(updatedWallet) => onUpdateWallet(updatedWallet)}
			/>
		))}
		
	</div>
	)
}

export default WalletPage;