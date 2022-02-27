import React from 'react';
import {Link} from "react-router-dom";

export const Menu = () =>{
    return (
        <><div>Меню:</div>
            <nav><Link to ='/balance'>- Проверить баланс кошелька</Link></nav>
            <nav><Link to ='/crypto'>- Посмотреть цены на криптовалюты</Link></nav>
        </>
    )
};