const form = document.getElementById('form')
const content = document.getElementById('box')
const publicKey = 'kFJSzRpAuX6HnrxstDFnqs1MLL2uPibg'


form.addEventListener('submit', async event => {
    event.preventDefault()
    content.className = 'hide'
    content.innerHTML = ''
    const locale = document.getElementById('search').value
    let cities, city
    const searchCities = async () => {
        const response = await fetch(`http://dataservice.accuweather.com/locations/v1/search?q=${locale}&apikey=${publicKey}`)
        const res = await response.json()
        return res
    }
    const searchCity = async () => {
        const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cities[0].Key}?apikey=${publicKey}`)
        const res = await response.json()
        return res
    }
    const inputHTML = (element,name) => {
        let date = element.LocalObservationDateTime
        content.className = 'box'
        content.innerHTML = content.innerHTML + `
            <div class="img"><img src="img/cloud.png" alt=""></div>
            <div class="info">
                <div class="temp">${element.Temperature.Metric.Value} ${element.Temperature.Metric.Unit}</div>
                <div class="weat"><span>${element.WeatherText}</span>${name}</div>
                <div class="date">${new Date(date).toLocaleDateString('pt-BR')}</div>
            </div>
        `
    }

    cities = await searchCities()
    city = await searchCity()
    inputHTML(city[0],cities[0].EnglishName)
})