# 🧾 ExtratIA

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Puter.js](https://img.shields.io/badge/IA-Puter.js-1f6b46?style=flat)

> Fotografe o comprovante. A IA anota pra você.

ExtratIA é um projeto de prática onde você fotografa um comprovante de compra e uma IA lê a imagem, identifica os produtos e valores, e mantém um total atualizado de quanto foi gasto — sem precisar digitar nada manualmente.

Projeto feito durante o curso **Programação + IA** da [DevClub](https://devclub.com.br), com o objetivo de praticar HTML, CSS, JavaScript e integração com IA.

## ✨ Funcionalidades

- 📷 Upload de foto do comprovante direto do dispositivo
- 🤖 Leitura automática dos itens via IA (Puter.js), sem precisar de backend ou chave de API
- 🧾 Exibição formatada dos produtos e valores identificados na imagem
- 🗂️ Histórico empilhado — cada novo comprovante lido aparece no topo, mantendo os anteriores
- 🗑️ Exclusão individual de comprovantes, com desconto automático do valor no total
- 💰 Soma automática do total gasto
- 🔢 Contador de comprovantes lidos

## 🛠️ Tecnologias

- **HTML5** — estrutura semântica da página
- **CSS3** — identidade visual com variáveis CSS (custom properties), inspirada em papel de recibo e carimbo de caixa registradora
- **JavaScript (Vanilla)** — manipulação do DOM, eventos e chamadas assíncronas (`async`/`await`)
- **[Puter.js](https://developer.puter.com/)** — IA rodando direto no navegador, sem precisar de servidor próprio ou chave de API

## 🚀 Como rodar

Não tem build nem instalação de dependências — é só abrir e usar:

1. Clone o repositório
   ```bash
   git clone https://github.com/leonardoftdev/extratia.git
   ```
2. Entre na pasta do projeto
3. Abra o `index.html` no navegador (duplo clique, ou com a extensão **Live Server** do VS Code, se preferir)

## 📁 Estrutura

```
extratia/
├── index.html     # estrutura da página
├── styles.css      # estilos e identidade visual
├── scripts.js       # lógica: leitura da IA, DOM, total gasto
└── favicon.svg      # ícone da aba do navegador
```

## 🧠 O que pratiquei nesse projeto

- Manipulação de DOM sem framework (criar, atualizar e remover elementos dinamicamente)
- Programação assíncrona com `async`/`await`
- Engenharia de prompt (formatar a resposta da IA de um jeito previsível o bastante pra extrair dados com regex)
- Boas práticas de acessibilidade (`aria-label`, diferença entre `textContent` e `innerHTML`, inputs escondidos de forma acessível)
- Organização de CSS com variáveis (custom properties) e um sistema de cores coerente

## 🔜 Próximos passos

- [ ] Deixar o layout responsivo pra telas bem pequenas
- [ ] Guardar o histórico de comprovantes entre sessões (`localStorage`)
- [ ] Somar os valores no Total Gasto

## 📸 Preview

[Preview do ExtratIA](./screenshots/preview.png)

---

Feito por [leonardoftdev] como parte do curso Programação + IA da DevClub.
