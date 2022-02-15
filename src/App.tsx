import React, {useState} from 'react';
import axios from "axios";
import {Crypto} from "./crypto";

function App() {
    let [arr, serArr] = useState<Crypto[]>();
    const call = () => {
        axios.get("/api/markets").then(res => {
            serArr(res.data.markets.map((i: any) => {
                return new Crypto(
                    i?.base_asset,
                    i?.quote_asset,
                    i?.price
                );
            }))
        });
    };

    return (
        <div className="App">
            <div>Hello</div>
            <button onClick={call}>Обновить данные</button>
            <div>{arr ? <>
                <table>
                    <tbody>
                    <tr>
                        <th>base asset</th>
                        <th>quote asset</th>
                        <th>price</th>
                    </tr>
                    </tbody>
                    {arr.map((i: Crypto, key:number) => {
                        return (
                            <tbody key={key}>
                            <tr>
                                <td>{i.base_asset}</td>
                                <td>{i.quote_asset}</td>
                                <td>{i.price}</td>
                            </tr>
                            </tbody>)
                    })}
                </table>
            </> : ''}</div>
        </div>)
}

export default App;

