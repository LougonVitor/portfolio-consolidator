import { useState } from "react"
import type { Wallet } from "../../interfaces/Wallet";

function WalletPage() {
	
	const [wallets, setWallet] = useState<Wallet[]>([
		{ id: 1, bank: 'INTER', name: 'Exchange program', holdings: [{name: 'test', amount: 1200}]}
		, { id: 2, bank: 'ITAU', name: 'Long term', holdings: [{name: 'test', amount: 1200}]}
	]);

	const [addInputAmount, setAddInputAmount] = useState('');

	const addAssetAmount = (walletId: number, assetName: string, newAmount: number) => {
		setWallet(prev => (
			prev.map(wallet => (
				wallet.id !== walletId ? wallet : {...wallet, holdings: wallet.holdings.map(holding => (
					holding.name !== assetName ? holding : {...holding, amount: newAmount + holding.amount}
				))}
			))
		))
	}

	const udpateAssetAmount = (providedWalletId: number, assetName: string, newAmount: number) => {
		setWallet(prev => (
			prev.map(wallet => (
				wallet.id !== providedWalletId ? wallet : {...wallet, holdings: wallet.holdings.map(holding => (
					holding.name !== assetName ? holding : {...holding, amount: newAmount}
				))}
			))
		))
	}

	const [bankName, setBankName] = useState("");
	const [walletName, setWalletName] = useState("");

	const createWallet = () => {
		const newWallet: Wallet = {
			id: wallets.length + 1,
			bank: bankName,
			name: walletName,
			holdings: []
		}

		setWallet(wallets.concat(newWallet))
	}

	return (
	<div>
		<h1>Porftolio</h1>
		
		<section id="wallet-manager">
			<div>
				<label htmlFor="wallet-bank">Bank</label>
				<input id="wallet-bank" type="text" onChange={(e) => setBankName(e.target.value)}/>

				<label htmlFor="wallet-name">Name</label>
				<input id="wallet-name" type="text" onChange={(e) => setWalletName(e.target.value)}/>
			</div>

			<button onClick={() => createWallet()}>New wallet</button>
		</section>

		<section id="wallets">
			{wallets.map(wallet => (
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
							{wallet.holdings.map(asset => (
								<tr>
									<td>{asset.name}</td>
									<td>
										<input type="number" onChange={e => udpateAssetAmount(wallet.id, asset.name, Number(e.target.value))} value={asset.amount}/>
									</td>
									<td>
										<input type="number" onChange={e => setAddInputAmount(e.target.value)}/>
										<button onClick={() => addAssetAmount(wallet.id, asset.name, Number(addInputAmount))}>Add value</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</section>
			))}
		</section>
	</div>
	)
}

export default WalletPage;