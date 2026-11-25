import type { Bank } from "../constants/Bank";
import type { Holding } from "./Holding";

export interface Wallet {
    id: number;
    bank: Bank;
    name: string;
    holdings: Holding[];
}