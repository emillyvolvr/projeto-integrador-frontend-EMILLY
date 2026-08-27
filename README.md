# VitrineStore — Catálogo de Loja de Roupas

Projeto básico em **HTML** e **CSS** que simula a vitrine de uma loja de roupas online, com fotos dos produtos, nomes, preços, informações detalhadas e um vídeo do YouTube com dicas sobre lojas de moda.

## Estrutura do projeto

```
loja-roupas/
├── index.html      → Estrutura da página (HTML)
├── style.css       → Estilização da página (CSS)
└── README.md       → Este arquivo
```

## Funcionalidades

- **Cabeçalho** com o nome e slogan da loja.
- **Grade de produtos (6 itens)**, cada um com:
  - Foto do produto
  - Nome do produto
  - Preço
  - Informações adicionais (material, tamanhos disponíveis e descrição)
  - Botão "Adicionar ao carrinho" (apenas visual, sem funcionalidade de compra real)
- **Vídeo do YouTube incorporado**, relacionado ao tema de lojas de roupas/moda.
- **Layout responsivo**, adaptado para celular, tablet e desktop usando CSS Grid.
- **Rodapé** simples com informações de direitos autorais.

## Sobre as imagens

As fotos dos produtos usadas neste projeto são **placeholders** (imagens geradas automaticamente com o nome do produto), gerados pelo serviço `placehold.co`. Isso evita problemas de direitos autorais em um projeto de estudo.

Para usar fotos reais dos seus produtos, basta trocar o link do `src` de cada `<img>` no `index.html` pelo caminho da sua própria imagem, por exemplo:

```html
<img src="imagens/camiseta-branca.jpg" alt="Camiseta Básica Branca">
```

## Sobre o vídeo

O vídeo incorporado é público do YouTube e traz dicas sobre como vender e divulgar uma loja de roupas online. Para trocar o vídeo, basta substituir o ID no link do `iframe` em `index.html`:

```html
<iframe src="https://www.youtube.com/embed/SEU_ID_AQUI"></iframe>
```

O ID fica na parte final do link do vídeo no YouTube (depois de `watch?v=`).

## Como usar

1. Baixe ou clone os arquivos desta pasta.
2. Abra o arquivo `index.html` em qualquer navegador (Chrome, Firefox, Edge etc.).
3. Pronto! A página já roda localmente, sem precisar de servidor ou instalação.

## Tecnologias utilizadas

- HTML5 (estrutura semântica)
- CSS3 (Flexbox, Grid, media queries para responsividade)

##  Possíveis melhorias futuras

- Adicionar funcionalidade real de carrinho de compras com JavaScript.
- Criar página de detalhes individual para cada produto.
- Adicionar filtros por categoria (camisetas, calças, calçados, acessórios).
- Conectar a um banco de dados ou API para produtos dinâmicos.

---

Projeto criado para fins de estudo/prática de HTML e CSS.
