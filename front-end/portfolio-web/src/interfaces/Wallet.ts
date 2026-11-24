import type { Holding } from "./Holding";

export interface Wallet {
    id: number;
    bank: string;
    name: string;
    holdings: Holding[];
}