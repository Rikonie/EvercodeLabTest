import React, {useState} from 'react';
import axios from "axios";
import {Crypto} from "./crypto";
import {CurrencyDictionary} from "./dictionary/CurrencyDictionary";

function App() {
    let [arr, serArr] = useState<Crypto[]>();
    let [currency, setCurrency] = useState<number>();

    const setCrypto = () => {
        axios.get("/api/markets").then(res => {
            serArr(res.data.markets.map((i: any) => {
                return new Crypto(
                    i?.base_asset,
                    i?.quote_asset,
                    i?.price
                );
            }))
        });
        axios.get("/daily_json.js").then(res => {
            setCurrency(res.data.Valute)
        });
    };

    let tetherCurr = arr?.find(tet=>tet.base_asset === "USDT" && tet.quote_asset ==="USD");

    return (
        <div className="App">
            <div>Hello</div>
            <button onClick={setCrypto}>Обновить данные</button>
            <div>{arr ? <>
                <table>
                    <tbody>
                    <tr>
                        <th>Аббревиатура криптовалюты</th>
                        <th>Название криптовалюты</th>
                        <th>Аббревиатура криптовалюты в которой указана цена</th>
                        <th>Название криптовалюты в которой указана цена</th>
                        <th>Цена</th>
                    </tr>
                    </tbody>
                    {arr.map((i: Crypto, key:number) => {
                        return (
                            <tbody key={key}>
                            <tr>
                                <td>{i.base_asset}</td>
                                <td>{CurrencyDictionary.map((g)=>{
                                    if (i.base_asset===g.abbreviation){
                                        return g.name
                                    }
                                })}</td>
                                <td>{i.quote_asset}</td>
                                <td>{CurrencyDictionary.map((g)=>{
                                    if (i.quote_asset===g.abbreviation){
                                        return g.name
                                    }
                                })}</td>
                                <td>{i.price}</td>
                            </tr>
                            </tbody>)
                    })}
                </table>
            </> : ''}</div>
            <div>{currency? JSON.stringify(currency):""}</div>
            <div>{tetherCurr? JSON.stringify(tetherCurr.price):""}</div>
        </div>)
}

export default App;

