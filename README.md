# Luna & Lace — Projeto Integrador Front-end

A **Luna & Lace** é uma loja virtual fictícia de roupas femininas e acessórios, criada para aplicar os conteúdos das Aulas 01 a 04 de Desenvolvimento Front-end para Web.

O projeto apresenta uma vitrine de produtos, tabela, links, imagens, formulário acessível, uma página "Sobre" e uma seção de vídeo HTML5 com fallback de formatos.

## Estrutura

```text
projeto-integrador-frontend-emilly/
├── assets/
│   ├── images/
│   └── video/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── .gitignore
├── index.html
├── sobre.html
└── README.md
```

## Conteúdos aplicados

### Aula 01 — Git e GitHub
- Projeto organizado para versionamento com Git.
- `.gitignore` contendo `node_modules/` e `.env`.
- Histórico recomendado com Conventional Commits.
- Branch e Pull Request podem ser criados no GitHub conforme a atividade.

### Aula 02 — Conceitos Web e HTML básico
- Estrutura HTML5 com `DOCTYPE`, `html`, `head` e `body`.
- Títulos, parágrafos, lista, tabela, links e imagens.
- Imagens armazenadas em `assets/images/` com caminhos relativos.
- Página adicional `sobre.html` ligada por caminho relativo.

### Aula 03 — HTML5 semântico e formulários
- Uso de `header`, `nav`, `main`, `section`, `article`, `aside` e `footer`.
- Um único `main` por página.
- Hierarquia de headings sem pular níveis.
- `label` associado corretamente ao `input` por `for`/`id`.
- `fieldset` e `legend` para agrupar dados relacionados.
- Tipos de input adequados: `text`, `email`, `tel`, `radio` e `checkbox`.
- Validação nativa com `required`, `minlength`, `maxlength` e `pattern`.

### Aula 04 — HTML5 multimídia
- `<video>` com dois `<source>`: WebM e MP4.
- Poster representativo.
- Legendas em arquivo `.vtt` com três blocos de tempo.
- `preload="metadata"` justificado no comentário HTML.
- Teste de suporte com `canPlayType()`.

## Como executar no VS Code

1. Abra a pasta do projeto no VS Code.
2. Abra o `index.html` no navegador ou use a extensão Live Server.
3. Navegue pela coleção, teste o carrinho e envie o formulário com dados válidos.
4. Abra o DevTools do navegador e verifique a aba **Network** para confirmar que os arquivos locais carregam sem erro 404.
5. No console, o script da página também testa `canPlayType()` para WebM e MP4.

## Git — exemplo de fluxo

```bash
git status
git add .
git commit -m "feat: adiciona loja virtual de moda feminina"
git push origin main
```

Para seguir exatamente o fluxo da atividade, crie a branch de cada etapa e abra o Pull Request correspondente para `main`.

## Observação

Este é um projeto acadêmico. Os produtos, preços, marca e imagens são fictícios e foram criados exclusivamente para demonstração front-end.
