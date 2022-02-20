import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell/TableCell";
import {Crypto} from "./crypto";
import {GetNameByAsset} from "./CurrencyDictionary";
import React from "react";

export class TableSelectedProps {
   arr?:Crypto[];
}

export const TableSelectedComponent:React.FC<TableSelectedProps> =({arr})=>{
return (
<Table>
    <TableBody>
        <TableRow>
            <TableCell align="center">Аббревиатура криптовалюты</TableCell>
            <TableCell align="center">Название криптовалюты</TableCell>
            <TableCell align="center">Аббревиатура криптовалюты в которой указана цена</TableCell>
            <TableCell align="center">Название криптовалюты в которой указана цена</TableCell>
            <TableCell align="center">Цена</TableCell>
        </TableRow>
        {arr?.map((g: Crypto, k: number) => {
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
</Table>)};