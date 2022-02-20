import axios from "axios";
import {Crypto} from "./crypto";

export class CryptoServices  {
    private static uuid (){
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
                v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        })};

    public static GetCrypto(): Promise<Crypto[]> {
        return axios.get('/api/markets').then(r => {
            return r.data.markets.map((i: any) => {
                return new Crypto(
                    CryptoServices.uuid(),
                    i?.base_asset,
                    i?.quote_asset,
                    i?.price
                );
            });
        })
    }
}