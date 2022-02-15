export class Crypto {
    base_asset: string;
    quote_asset: string;
    price: number;

    constructor (base_asset:string, quote_asset: string, price: number) {
        this.base_asset = base_asset;
        this.quote_asset = quote_asset;
        this.price = price
    }
}