import { editor } from './editor.js'

const btnSalvar = document.querySelector('button#salvar')
btnSalvar.addEventListener('click', () => salvar(editor))

async function salvar(editor) {
    const dados = await editor.save()
    console.log(dados)

    renderizar(dados)
    mostrarNews()
    alert("Notícia salva!")
}

const btnPreview = document.querySelector("button#preview")

btnPreview.addEventListener('click', () => mostrarNews())

function renderizar(conteudo) {
    const news = document.querySelector('section#news')
    const titulo = document.querySelector('input#titulo')

    news.innerHTML = ""

    let ele = document.createElement('h3')
    ele.textContent = titulo.value
    news.appendChild(ele)

    conteudo.blocks.forEach(bloco => {
        let elemento

        switch(bloco.type) {
            case 'header':
                elemento = document.createElement(
                    `h${bloco.data.level}`
                )
                
                elemento.textContent = bloco.data.text
                break
            case 'paragraph':
                elemento = document.createElement('p')
                elemento.innerHTML = bloco.data.text
                break
            case 'image':
                let figure = document.createElement('figure')
                let img = document.createElement('img')
                let cap = document.createElement('figcaption')

                img.src = bloco.data.file.url
                img.alt = bloco.data.caption || ''
                cap.textContent = "| "+ bloco.data.caption || ''

                figure.appendChild(img)
                figure.appendChild(cap)
                news.appendChild(figure)
                break
        }

        if (elemento) {
            news.appendChild(elemento)
        }
    })
}

function mostrarNews() {
    const container = document.querySelector('div#news_container')
    const news = document.querySelector('section#news')
    
    if (news.textContent.trim() === "") {
        //alert("Vazio então nao mostro")
        container.classList.remove("able")
        container.classList.add("desable")
    } else {
        //alert("tem coisa então mostro")
        container.classList.remove("desable")
        container.classList.add("able")
    }
}