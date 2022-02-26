import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell/TableCell";
import {Crypto} from "./crypto";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import {GetNameByAsset} from "./CurrencyDictionary";
import Table from "@mui/material/Table";
import React from "react";

export class TableProps {
    arr?:Crypto[];
    onChange: (e:any,i:Crypto) => void;
}

export const TableComponent:React.FC<TableProps>=({arr, onChange})=>{
    
    return(
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
                    <TableCell align="center"> <Checkbox onChange={(e)=>onChange(e,i)}/></TableCell>
                    <TableCell align="center">{GetNameByAsset(i.base_asset)}</TableCell>
                    <TableCell align="center">{i.quote_asset}</TableCell>
                    <TableCell align="center">{GetNameByAsset(i.quote_asset)}</TableCell>
                    <TableCell align="center">{i.price}</TableCell>
                </TableRow>
            )
        })}
    </TableBody>
</Table>)};