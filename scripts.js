

let pedido = `Analise a foto do comprovante e devolva os produtos e valores EXATAMENTE neste formato, sem texto antes ou depois:

🧾 Comprovante lido:
🛒 [produto] — R$ [valor]
🛒 [produto] — R$ [valor]

💰 Total: R$ [valor total]

Regras: responda em português do Brasil, use vírgula decimal (ex: R$ 12,50), some os itens pra calcular o total (não copie o total impresso caso ilegível). Se não conseguir ler a imagem, responda apenas: "❌ Não consegui ler esse comprovante."`;

let total = 0
let contador = 0

async function lerFoto() {
    let foto = document.querySelector(".foto").files[0]
    let resultado = document.querySelector("#resultado")


    let bloco = document.createElement("div")
    bloco.className = "comprovante-item"


    let botaoExcluir = document.createElement("button")
    botaoExcluir.className = "excluir-item"
    botaoExcluir.textContent = "🗑️"
    botaoExcluir.type = "button"
    botaoExcluir.setAttribute("aria-label", "Excluir este comprovante")
    botaoExcluir.onclick = () => bloco.remove()


    let textoEl = document.createElement("p")
    textoEl.className = "comprovante-texto"
    textoEl.textContent = "Lendo comprovante..."

    bloco.appendChild(botaoExcluir)
    bloco.appendChild(textoEl)
    resultado.prepend(bloco)

    let resposta = await puter.ai.chat(pedido, foto)
    let texto = resposta.message.content
    let partes = texto.split("💰 Total: R$")
    console.log(partes)

    textoEl.textContent = texto

    let valorTotal = partes[1].trim().replace(",", ".")
    total += Number(valorTotal)
    contador++

    document.querySelector(".total-gasto").textContent = `R$ ${total.toFixed(2)}`
    document.querySelector(".contador-comprovantes").textContent =
        `${contador} comprovante${contador === 1 ? "" : "s"} lido${contador === 1 ? "" : "s"}`





}