# Teste prático para o squad Descoberta

O repositório contém uma aplicação desenvolvida em VueJS de acordo com o design solicitado.
Contém apenas uma página e, nela, são carregados os componentes que a compõem.

## Ferramentas utilizadas

- VueJS v3
- SCSS
- GitHub
- Netlify

## Visualizando página

Acesse o link:
```
https://comforting-gaufre-9df1b6.netlify.app/#/
```

## Clonando repositório

Em uma pasta, abra o terminal e rode o seguinte bash:
```
git@github.com:WillRoDias/teste_descoberta.git
```

## Estrutura do projeto

- Página principal "HomeView"

- Componentes 
  - Header
  - HeaderMobile
  - SelectOffers
  - SelectOffersMobile
  - Content
  - ContentMobile
  - Offercard
  - OffercardMobile
  - Footer
  - FooterMobile

## Funcionamento da aplicação

A aplicação quando carregada, identifica se o display corresponde a um device desktop ou um mobile, determinando assim se os componentes carregados serão os construídos para mobile ou desktop.

Os componentes de cabeçalho (Header e HeaderMobile) não executam nenhuma tarefa, conforme solicitado. Possui apenas botões estilizados.

Os componentes de conteúdo (Content e ContentMobile) abrigam o botão de selecionar oferta, o qual carrega o componente SelectOffers ou SelectOffersModal e o carregamento das ofertas adicionadas pelo usuário.
Quando o usuário adiciona uma oferta nos componentes SelectOffers e SelectOffersModal, essa ofertas são armazenadas no localStorage do navegador que por sua vez são carregadas no Content.

Os componentes de seleção de oferta (SelectOffers e SelectOffersMobile) carregam as ofertas contidas no arquivo db.json, as quais são filtradas de acordo com o que o usuários selecionar no formulário de filtro.
As ofertas selecionadas são salvas localmente no navegador utilizando o localStorage.

Os componentes de rodapé (Footer e FooterMobile) não executam nenhuma tarefa conforme solicitado, apenas possuem botões estilizados.