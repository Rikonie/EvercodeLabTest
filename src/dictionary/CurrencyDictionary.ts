class DictionaryRecord {
    abbreviation: string;
    name: string;

    constructor(abbreviation: string, name: string) {
        this.abbreviation= abbreviation;
        this.name=name;
    }
}

export const CurrencyDictionary:DictionaryRecord[] = [{abbreviation: "BTC", name:"Bitcoin"}, {abbreviation: "USDT", name:"Tether"},
    {abbreviation: "ETH", name:"Ethereum"}, {abbreviation: "EUR", name:"Евро"}, {abbreviation: "TRY", name:"Турецкая лира"},
    {abbreviation: "BUSD", name:"Binance USD"}, {abbreviation: "BNB", name:"Binance Coin"}, {abbreviation: "USD", name:"USD Coin"},
    {abbreviation: "GALA", name:"Gala"}, {abbreviation: "AVAX", name:"Avalanche"}, {abbreviation: "SHIB", name:"Shiba Inu coin"},
    {abbreviation: "XRP", name:"Ripple"}, {abbreviation: "SOL", name:"Solana"}, {abbreviation: "MANA", name:"Decentraland"},
    {abbreviation: "SLP", name:"Small Love Potion"}, {abbreviation: "SAND", name:"The Sandbox"}, {abbreviation: "ADA", name:"Cardano"},
    {abbreviation: "LUNA", name:"Luna"}, {abbreviation: "MATIC", name:"Polygon"}, {abbreviation: "FTM", name:"Fantom"},
    {abbreviation: "UST", name:"TerraUSD"}, {abbreviation: "DOT", name:"Polkadot"},
    {abbreviation: "USDC", name:"USD Coin"}, {abbreviation: "TRX", name:"TRON"}, {abbreviation: "ALICE", name:"Alice Crypto"},
    {abbreviation: "DOGE", name:"Dogecoin "}, {abbreviation: "AXS", name:"Axie Infinity"}, {abbreviation: "THETA", name:"Theta"},
    {abbreviation: "NEAR", name:"Near"}, {abbreviation: "ATOM", name:"Cosmos "}, {abbreviation: "LINK", name:"Chainlink "},
    {abbreviation: "FIL", name:"Filecoin"}, {abbreviation: "QTUM", name:"Qtum"}, {abbreviation: "ROSE", name:"Oasis Network"},
    {abbreviation: "ACH", name:"Alchemy Pay"}, {abbreviation: "GRT", name:"The Graph"}, {abbreviation: "LTC", name:"Litecoin"},
    {abbreviation: "JASMY", name:"Jasmy Coin"}, {abbreviation: "ICP", name:"Internet Computer"}, {abbreviation: "QI", name:"BENQI"},
    {abbreviation: "NFT", name:"NFT"}, {abbreviation: "ETC", name:"Ethereum Classic"}, {abbreviation: "ONE", name:"OneCoin"},
    {abbreviation: "EGLD", name:"Elrond "}, {abbreviation: "BTT", name:"BitTorrent"}, {abbreviation: "VRA", name:"Verasity"},
    {abbreviation: "TLM", name:"Alien Worlds"}, {abbreviation: "PEOPLE", name:"ConstitutionDAO"}, {abbreviation: "CRV", name:"Curve"},
    {abbreviation: "VET", name:"VeChain"}, {abbreviation: "BETA", name:"Beta Finance"}, {abbreviation: "DYDX", name:"dYdX"},
    {abbreviation: "NEO", name:"NEO"}, {abbreviation: "TORN", name:"Tornado Cash"}, {abbreviation: "KAVA", name:"Kava"},
    {abbreviation: "ALGO", name:"Algorand"}, {abbreviation: "SUPER", name:"SuperFarm"}];

export const GetNameByAsset =(asset: string)=> {
    let res = CurrencyDictionary.find(a=> a.abbreviation == asset);
    return !!res? res.name: 'unknown';
};
