export class Wallet {

    nameCrypto: string;
    nameWallet: string;
    balance: number;

    constructor (nameCrypto:string ,nameWallet:string, balance: number) {
        this.nameCrypto = nameCrypto;
        this.nameWallet = nameWallet;
        this.balance = balance
    }
}