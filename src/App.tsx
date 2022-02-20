import React, {useEffect, useState} from 'react';
import {Crypto} from "./crypto";
import {CryptoServices} from "./crypto-services";
import {Button} from "@mui/material";
import {DownloadFile} from "./download";
import {TableSelectedComponent} from "./table-selected";
import {TableComponent} from "./table";

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

    const toggleVisibility = () => {
        if (visible) {
            setVisible(false);
            setSelectedArr([]);
            setCrypto()
        } else {
            setVisible(true)
        }
    };
    const onSelect = (e:any, i:Crypto) => {
        let selArr:Array<Crypto> = Array.from(selectedArr);
        if (e.target.checked) {
            selArr.push(i);
        } else {
            let el = selArr.find((x) => x.id === i.id);
            let index = !!el ? selArr.indexOf(el) : -1;
            if (index !== -1) {
                selArr.splice(index, 1);
            }
        }
        setSelectedArr(selArr)
    };

    return (
        <div className="App">
            <Button onClick={toggleVisibility} variant="contained">Показать выбранные/выбрать новые</Button>
            <Button onClick={() => DownloadFile(visible ? selectedArr : arr)} variant="contained">Загрузить</Button>
            <div>{visible ? <TableSelectedComponent arr={selectedArr}/> : <TableComponent arr={arr} onChange={onSelect}/>}</div>
        </div>)
}

export default App;

