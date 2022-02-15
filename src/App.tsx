import React from 'react';

function App() {
    const call = async () => {
        let response = await fetch("https://www.cryptingup.com/api/markets", {
            "headers": {
                "Access-Control-Allow-Origin": "*"
            },
            "mode": "no-cors"
        }).then(async res => await console.log(res.text()));
        await console.log(response);
    };

    return (
        <div className="App">
            <div>Hello</div>
            <button onClick={call}>Обновить данные</button>
        </div>
    );
}

export default App;
