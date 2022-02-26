import React, {useState} from "react";
import {SelectChangeEvent, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {CryptoServices} from "./crypto-services";
import {Wallet} from "./wallet";
import {GetNameByAsset} from "./CurrencyDictionary";
import {DownloadBalanceFile} from "./download";
import {Link} from "react-router-dom";


export const Balance = () => {
    const [balance, setBalance] = useState<Wallet[]>([]);
    const [currency, setCurrency] = useState<string>('');
    const [walletNumber, setWalletNumber] = useState<string>('');

    const onSelect = (event: any) => {
        setCurrency(event.target.value as string);
    };

    const getWallet = (event: any) => {
        setWalletNumber(event.target.value as string);
    };
    const getBalanceWallet = async (currency: string, walletNumber: string) => {
        let balanceWallet = await CryptoServices.GetBalance(currency, walletNumber);
        if (balanceWallet) {
            let findWallet = balance.find((x) => x.nameWallet === walletNumber);
            if (findWallet==undefined) {
                let n = new Wallet(GetNameByAsset(currency), walletNumber, balanceWallet);
                let arr: Array<Wallet> = Array.from(balance);
                arr.push(n);
                setBalance(arr);
            }
        }

    };

    return (
        <>
            <nav><Link to='/'>Вернуться в меню</Link></nav>
            <FormControl variant="standard" sx={{minWidth: 170}}>
                <InputLabel>Выберите валюту</InputLabel>
                <Select label={"Выберите валюту"} onChange={onSelect} value={currency}>
                    <MenuItem value={'btc'}>Bitcoin</MenuItem>
                    <MenuItem value={'eth'}>Ethereum</MenuItem>
                </Select>
            </FormControl>
            <span> </span>
            <TextField label={"Введите номер кошелька"} variant="standard" onChange={getWallet}/>
            <span> </span>
            <Button variant="contained" size="large" onClick={() => getBalanceWallet(currency, walletNumber)}>Проверить
                баланс</Button>
            {balance?.map((i, key) => {
                return (<div key={key}>Баланс вашего кошелька
                    №{i.nameWallet} криптовалюты: {i.nameCrypto} составляет: {i.balance} </div>)
            })}
            <Button variant="contained" size="large" onClick={() => DownloadBalanceFile(balance)}>Загрузить в формате
                csv</Button>
        </>
    )
};