export class Crypto {
    id: string;
    base_asset: string;
    quote_asset: string;
    price: number;

    constructor (id:string ,base_asset:string, quote_asset: string, price: number) {
        this.id = id;
        this.base_asset = base_asset;
        this.quote_asset = quote_asset;
        this.price = price
    }
}