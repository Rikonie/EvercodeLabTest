import {Crypto} from "./crypto";
import {GetNameByAsset} from "./CurrencyDictionary";

function download(data: any, filename: string, type: string) {
    let file = new Blob([data], {type: type});

    let a = document.createElement("a"),
        url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}

export const DownloadFile = (visible: boolean, selectedArr: Crypto[], arr: Crypto[]) => {

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

        download(str, "Crypto.csv", 'text/csv;charset=UTF-8');

};