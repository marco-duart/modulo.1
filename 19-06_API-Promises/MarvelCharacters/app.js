const timestamp = (new Date()).getTime()
const publicKey = '27081c8cb9e3fa5a3906a673b56f14e8'
const privateKey = 'b969de2c7a58bef7883df5afe863d96dcb919dba'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)

promise.then(response => {
    console.log(response)
    let content = document.getElementById('content')
    response.json().then(res => {
        console.log(res)
        res.data.results.forEach(element => {
            content.innerHTML = content.innerHTML + 
            `<div class="box">
                <div class="box-image">
                    <img class="imagem" src="${element.thumbnail.path}.${element.thumbnail.extension}" alt="hero">
                </div>
                <div class="box-content">
                    <div class="box-title">${element.name}</div>
                    <div>
                        <div class="box-section">
                            <div class="box-section-title">
                                Comics
                            </div>
                            <ul>
                                <li>${element.comics.items[0].name}</li>
                                <li>${element.comics.items[1].name}</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div class="box-section">
                            <div class="box-section-title">
                                Séries
                            </div>
                            <ul>
                                <li>${element.series.items[0].name}
                                <li>${element.series.items[1].name}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`
        });
    })
}).catch(error => {
  console.log('Erro: ' + error)
})