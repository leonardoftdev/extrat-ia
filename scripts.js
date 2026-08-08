

let pedido = `Analise a foto do comprovante e devolva os produtos e valores EXATAMENTE neste formato, sem texto antes ou depois:

🧾 Comprovante lido:
🛒 [produto] — R$ [valor]
🛒 [produto] — R$ [valor]

💰 Total: R$ [valor total]

Regras: responda em português do Brasil, use vírgula decimal (ex: R$ 12,50), some os itens pra calcular o total (não copie o total impresso caso ilegível). Se não conseguir ler a imagem, responda apenas: "❌ Não consegui ler esse comprovante."`; 

async function lerFoto() {
    let foto = document.querySelector(".foto").files[0]
    let resultado = document.querySelector("#resultado")

    // cria um bloco novo só pra ESSE comprovante
    let bloco = document.createElement("div")
    bloco.className = "comprovante-item"
    bloco.textContent = "Lendo comprovante..."
    resultado.prepend(bloco) // adiciona no final, sem apagar os anteriores

    let resposta = await puter.ai.chat(pedido, foto)
    let texto = resposta.message.content

    bloco.textContent = texto

}