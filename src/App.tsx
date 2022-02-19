import React, {useEffect, useState} from 'react';
import {Crypto} from "./crypto";
import {CurrencyDictionary, GetNameByAsset} from "./dictionary/CurrencyDictionary";
import {CryptoServices} from "./crypto-services";

function App() {

    let [arr, setArr] = useState<Crypto[]>([]);
    let [selectedArr, setSelectedArr] = useState<Crypto[]>([]);
    let [visible, setVisible] = useState<boolean>(false);

    const setCrypto = async () => {
        let a = await CryptoServices.GetCrypto();
        setArr(a);
    };

    useEffect(() => {
        setCrypto()
    }, []);

    const vis = () => {
        if (visible) {
            setVisible(false);
            setSelectedArr([])
        } else {
            setVisible(true)
        }
    };

    function download(data:any, filename:string, type: string) {
        let file = new Blob([data], {type: type });

            let a = document.createElement("a"),
                url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);

    }

    const downloadFile = () => {
        let str = "Аббревиатура криптовалюты, Название криптовалюты, Аббревиатура криптовалюты в которой указана цена, Название криптовалюты в которой указана цена, Цена \r\n";
        const f = (array: Crypto[]) => {
            for (let i = 0; i < array.length; i++) {
                str = str + array[i].base_asset + "," + GetNameByAsset(array[i].base_asset) + "," +
                    array[i].quote_asset + "," + GetNameByAsset(array[i].quote_asset) + "," +
                    array[i].price + "\r\n";
            }
        };

        if (visible) {
            f(selectedArr)
        } else {
            f(arr)
        }

        download(str, "1.csv", 'text/csv;charset=UTF-8');
    };


return (
    <div className="App">
        <button onClick={vis}>Показать выбранные/выбрать новые</button>
        <button onClick={downloadFile}>Загрузить</button>
        <div>{visible ? <>
            <table>
                <tbody>
                <tr>
                    <th>Аббревиатура криптовалюты</th>
                    <th>Название криптовалюты</th>
                    <th>Аббревиатура криптовалюты в которой указана цена</th>
                    <th>Название криптовалюты в которой указана цена</th>
                    <th>Цена</th>
                </tr>
                {selectedArr.map((g: Crypto, k: number) => {
                    return (
                        <tr key={k}>
                            <td>{g.base_asset}</td>
                            <td>{GetNameByAsset(g.base_asset)}</td>
                            <td>{g.quote_asset}</td>
                            <td>{GetNameByAsset(g.quote_asset)}</td>
                            <td>{g.price}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </> : <>
            <table>
                <tbody>
                <tr>
                    <th>Аббревиатура криптовалюты</th>
                    <th>Выбор</th>
                    <th>Название криптовалюты</th>
                    <th>Аббревиатура криптовалюты в которой указана цена</th>
                    <th>Название криптовалюты в которой указана цена</th>
                    <th>Цена</th>
                </tr>
                {arr?.map((i: Crypto, key: number) => {
                    return (
                        <tr key={key}>
                            <td>{i.base_asset}</td>
                            <td><input type='checkbox' onChange={(e) => {
                                let selArr: Array<Crypto> = Array.from(selectedArr);
                                if (e.target.checked) {
                                    selArr.push(i);
                                } else {
                                    let el = selArr.find((x) => x.id == i.id);
                                    console.log('el', el);
                                    let index = !!el ? selArr.indexOf(el) : -1;
                                    console.log('index', index);
                                    if (index != -1) {
                                        selArr.splice(index, 1);
                                    }

                                    console.log('selArr', selArr);
                                }
                                setSelectedArr(selArr)
                            }}/></td>
                            <td>{GetNameByAsset(i.base_asset)}</td>
                            <td>{i.quote_asset}</td>
                            <td>{GetNameByAsset(i.quote_asset)}</td>
                            <td>{i.price}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>}</div>
    </div>)
}

export default App;

