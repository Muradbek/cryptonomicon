const API_KEY = `84d6268818ede37deaf2804076b00a9e5e9b8c9052f1cbef1fdda913e15173cc`

//to do refactor to use url.searchParams
export const  loadTicker = tickerName => {
    fetch(
    `https:/min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD&api_key=${API_KEY}`
    ).then(r=> r.json());}

export const loadCoinList = async (url) => {
        let response = await fetch(url);
        let data = await response.json(); // читаем ответ в формате JSON
        let list =  data.Data
        let coinList =  []
        for (let key in list) {
            coinList.push(list[key].FullName)
        }
        let spinner = false
        return await [coinList, spinner]
    }
