import React, {useEffect, useState} from 'react';
import {Crypto} from "./crypto";
import {GetNameByAsset} from "./CurrencyDictionary";
import {CryptoServices} from "./crypto-services";
import {Button} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {DownloadFile} from "./download";

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

return (
    <div className="App">
        <Button onClick={vis} variant="contained">Показать выбранные/выбрать новые</Button>
        <Button onClick={()=>DownloadFile(visible,selectedArr,arr)} variant="contained">Загрузить</Button>
            <div>{visible ? <>
            <Table>
                <TableBody>
                <TableRow>
                    <TableCell align="center">Аббревиатура криптовалюты</TableCell>
                    <TableCell align="center">Название криптовалюты</TableCell>
                    <TableCell align="center">Аббревиатура криптовалюты в которой указана цена</TableCell>
                    <TableCell align="center">Название криптовалюты в которой указана цена</TableCell>
                    <TableCell align="center">Цена</TableCell>
                </TableRow>
                {selectedArr.map((g: Crypto, k: number) => {
                    return (
                        <TableRow key={k}>
                            <TableCell align="center">{g.base_asset}</TableCell>
                            <TableCell align="center">{GetNameByAsset(g.base_asset)}</TableCell>
                            <TableCell align="center">{g.quote_asset}</TableCell>
                            <TableCell align="center">{GetNameByAsset(g.quote_asset)}</TableCell>
                            <TableCell align="center">{g.price}</TableCell>
                        </TableRow>
                    )
                })}
                </TableBody>
            </Table>
        </> : <>
            <Table>
                <TableBody>
                <TableRow>
                    <TableCell align="center">Аббревиатура криптовалюты</TableCell>
                    <TableCell align="center">Выбор</TableCell>
                    <TableCell align="center">Название криптовалюты</TableCell>
                    <TableCell align="center">Аббревиатура криптовалюты в которой указана цена</TableCell>
                    <TableCell align="center">Название криптовалюты в которой указана цена</TableCell>
                    <TableCell align="center">Цена</TableCell>
                </TableRow>
                {arr?.map((i: Crypto, key: number) => {
                    return (
                        <TableRow key={key}>
                            <TableCell align="center">{i.base_asset}</TableCell>
                            <TableCell align="center"> <Checkbox onChange={(e) => {
                                let selArr: Array<Crypto> = Array.from(selectedArr);
                                if (e.target.checked) {
                                    selArr.push(i);
                                } else {
                                    let el = selArr.find((x) => x.id === i.id);
                                    console.log('el', el);
                                    let index = !!el ? selArr.indexOf(el) : -1;
                                    console.log('index', index);
                                    if (index !== -1) {
                                        selArr.splice(index, 1);
                                    }

                                    console.log('selArr', selArr);
                                }
                                setSelectedArr(selArr)
                            }}/></TableCell>
                            <TableCell align="center">{GetNameByAsset(i.base_asset)}</TableCell>
                            <TableCell align="center">{i.quote_asset}</TableCell>
                            <TableCell align="center">{GetNameByAsset(i.quote_asset)}</TableCell>
                            <TableCell align="center">{i.price}</TableCell>
                        </TableRow>
                    )
                })}
                </TableBody>
            </Table>
        </>}</div>
    </div>)
}

export default App;

