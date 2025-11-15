# Módulo Final - Criação de um e-commerce de jogos

## Menu

[Aula 1 - Faça as configurações iniciais](#aula-1---faça-as-configurações-iniciais)  
[Aula 2 - Construa o cabeçalho](#aula-2---construa-o-cabeçalho)  
[Aula 3 - Crie o banne](#aula-3---crie-o-banner)  
[Aula 4 - Componentize - Parte I](#aula-4---componentize---parte-i)  
[Aula 5 - Componentize - Parte II](#aula-5---componentize---parte-ii)  
[Aula 6 - Componentize - Parte III](#aula-6---componentize---parte-iii)  
[Aula 7 - Construa as páginas](#aula-7---construa-as-páginas)  
[Aula 8 - Construa o rodapé](#aula-8---construa-o-rodapé)

[Parte 1 - Projeto](https://github.com/ogiansouza/eplay/tree/parte-1)
[Figma](https://www.figma.com/file/FiFpwvwwHX0rCbrXatjMg4/EPLAY?type=design&node-id=01&mode=design)

# Parte 1

## Aula 1 - Faça as configurações iniciais

### Objetivos

- Fazer fork do repositório;
- Instalar o styled components e o react router DOM;
- Importar as fontes do projeto;
- Criar constante com as cores do projeto.

### Anotações

#### Comandos úteis

- Instalar dependências do projeto:
  - npm install
- Instalar styled-components e react-router-dom:
  - npm install styled-components react-router-dom
- Iniciar o projeto:
  - npm start

#### Passos realizados (resumido)

1. Criar fork do repositório e clonar localmente.
2. Instalar dependências com npm install.
3. Instalar styled-components e react-router-dom.
4. Importar a fonte Roboto (via Google Fonts no index.html ou @import em styles).
5. Criar pasta styles e arquivo styles/styles.ts.
6. Usar createGlobalStyle do styled-components para:
   - Fazer o reset básico de CSS.
   - Definir variáveis/constantes de cores.
   - Aplicar background do body e cor de texto primária.

### Observações rápidas

- Fonte: Roboto.
- Global styles em styles/styles.ts usando createGlobalStyle.
- Manter as cores do projeto em constantes para reutilização nos componentes.

## Aula 2 - Construa o cabeçalho

### Objetivos

- Criar pasta de imagens para o projeto;
- Criar a estrutura dos componentes do projeto;
- Estilizar a estrutura do cabeçalho;
- Configurar o container com as dimensões do projeto.

### Anotações

Criação das pastas `assets` e `images` para armazenar imagens e ícones que vamos utilizar no projeto.

Criamos a pasta de componentes para começar a trabalhar nas partes do site. O primeiro componente construído foi o `Header`. Sua estrutura básica possui duas áreas: a primeira contém o logo e o menu de navegação; a segunda contém o carrinho de compras, que exibe um texto com a quantidade de itens e um ícone de carrinho.

Foram criados styled-components para o header, aplicando display: flex; align-items: center; e justify-content: space-between; para alinhar e distribuir corretamente o logo, o menu e o carrinho.

## Aula 3 - Crie o banner

### Objetivos

- Criar componente para o banner do projeto;
- Customizar a estrutura do banner;
- Criar classes para adicionar conteúdo no código;
- Estilizar as fontes do projeto.

### Anotações

- Criar a pasta src/components/Banner com os arquivos index.tsx e style.ts (ou styles.ts).
- Para o banner usamos um styled-component chamado Imagem — uma div com background-image — para facilitar controle de cover, posicionamento e responsividade.
- O conteúdo textual (título, preços, botões) deve ficar dentro do Container para respeitar a largura do layout (por exemplo, 1024px).
- Posicionar título e preços com flexbox ou posicionamento relativo/absolute conforme o design; ajustar tamanho e espaçamento em diferentes breakpoints.
- Como a imagem é aplicada como background, não há atributo alt. Se a imagem for informativa, providencie uma alternativa acessível (aria-label, texto visível ou usar <img> com alt apropriado).
- Observação sobre implementação: optar por envolver o conteúdo com o Container altera o comportamento — a imagem ocupa full-width enquanto o conteúdo fica centralizado no Container.
- Próximos passos: criar e componentizar botão e tag do banner (reutilizáveis nas próximas aulas).

## Aula 4 - Componentize - Parte I

### Objetivos

- Criar os diferentes tamanhos de tags para o projeto;
- Adicionar o position: relative ao container para posicionamento das tags;
- Criar e estilizar os botões do e-commerce.

### Anotações

- Componentes criados: Tag e Button.
- Tag:

  - A Tag recebe uma prop (por exemplo `size`) que define variações de tamanho (ex.: "big" para o banner e "small" para os cards).
  - Para posicionar a Tag sobre a imagem/contêiner usamos position: absolute na Tag e position: relative no Container pai.
  - Implementar estilos da Tag via styled-components, usando props para alterar padding, font-size e outros valores.

- Button:

  - O Button tem um comportamento discriminado por `type`: pode ser 'button' (ação) ou 'link' (navegação).
  - Quando `type === 'link'`, usar o componente do react-router-dom (`as={Link}`) e receber a prop obrigatória `to`.
  - Quando `type === 'button'`, aceitar `onClick` para executar ações.
  - Evitar duplicar CSS: criar um único ButtonContainer e usá-lo como elemento base; para a versão link utilize `as={Link}` em vez de criar outro componente com os mesmos estilos.

- Layout e alinhamento:

  - Posicionar botão e conteúdo usando flexbox conforme a referência do layout (ex.: display: flex; justify-content: space-between; align-items: flex-end quando necessário).
  - Ajustar espaçamentos e hit area em mobile.

- Boas práticas:
  - Usar styled-components para encapsular estilos e permitir variações via props.
  - Adicionar aria-labels quando necessário e title nas interações para acessibilidade.
  - Preferir SVGs para ícones por melhor escalabilidade e controle de cor.

## Aula 5 - Componentize - Parte II

### Objetivos

- Criar e estilizar os cards de produtos;
- Usar o sistema de grid.

### Anotações

#### Estrutura de arquivos sugerida

- src/components/Product/
  - index.tsx
  - style.ts
- src/components/ProductsList/
  - index.tsx
  - style.ts

#### Product — responsabilidades

- Mostrar capa do jogo (imagem), título, descrição curta e conjunto de tags (categoria, plataforma, preço e desconto).
- Usar <img> com alt descritivo para a capa.
- Reutilizar o componente Tag para rótulos.
- Componentes/styled-components internos recomendados: `Card`, `Image`, `Title`, `Description`.
- Tags: `Categoria`, `Sistema operacional`, `Preço`, `Desconto`

#### ProductsList — responsabilidades

- Renderizar seção com título e grid de Product cards.
- Receber props para título e variante visual (ex.: gray | black).
- Usar Container global para limitar largura da seção.
- Usar display grid para organizar disposição dos jogos

Usamos o site `placehold.co` para gerar os placeholders das imagens.

## Aula 6 - Componentize - Parte III

### Objetivos

- Usar array de strings para renderizar diferentes tags;
- Aplicar estilização a componentes.

### Anotações

Não vale a pena criar um tipo para cada tag que vamos utilizar nos jogos. O professor está sugerindo criar uma array de strings para fazer a renderização dos conteúdos que tem que ser mostrados em tags.

Voltamos ao componente `Products` para fazer a criação de sua `Props`.

```ts
type ProductProps = {
  title: string; // Nome jogo - Vai ser usado no título e na descrição da imagem.
  category: string; // Categoria jogo
  system: string; // Sistema operacional
  description: string; // Descrição jogo
  infos: string[]; // Array que as Tags vão usar como referência para ser geradas
  image: string; // Imagem jogo
};
```

De forma geral vamos só passar essas informações no respectivo campo quando formos construir o produto, mas com as infos, nos vamos fazer um map do array e gerar as tags a partir dele. A informação armazenada no array vai ser o conteúdo e a key.

Envolvemos onde ficaram essas tags dentro de uma div `DivInfo` e colocamos ela com posição absoluta, top e right 32px, para que elas ficassem dentro do card e não no topo da tela adicionamos ao `Card` o posição relativa.

Atualizamos as props do `Product` que estava sendo utilizado no `ProductsList` com todos os valores para serem rendeirzados corretamente.

```ts
<Product
  infos={["-10%", "R$ 150,00"]}
  image="placehold.co/225x250"
  title="Nome do jogo"
  category="Ação"
  system="Windows"
  description="Descrição do jogo"
/>
```

Fizemos a estilização do card e do fundo para que a depender do valor de background tivesse uma cor preta ou cinza de fundo dos elementos.
Para estilização do card o professor só fez estilizar o css do component `Card` dentro do `ContainerProducts` com o `${Card}`, duplicamos `ProductsList` para criar a seção do `Em breve` que segue a mesma formatação só que com uma estilziação um pouco diferente.

## Aula 7 - Construa as páginas

### Objetivos

- Usar o React Router Dom para organizar as páginas;
- Criar modelos para a estrutura, os atributos e o comportamento das páginas;
- Criar as páginas de categoria;
- Relacionar o componente com o sistema de rotas no app;
- Usar o BrowserRouter.

### Anotações
- Estrutura básica de páginas
  - Criar pasta src/pages/ com uma pasta para cada página (ex.: Home, Categories, Product).
  - Cada page deve ter um index.tsx que exporta o componente da página.
  - Mover conteúdos hard-coded para mocks ou instâncias de modelos (ex.: src/models/Game.ts).

- Models e dados
  - Criar modelos/typing em src/models/Game.ts (classe ou interface) e usar arrays de exemplos para popular ProductsList.
  - No componente ProductsList renderizar a lista a partir de um map do array de objetos.

- Router e Header
  - O Header usa <Link/>: ele precisa estar renderizado dentro do contexto do Router.
  - Evite colocar o Header fora do BrowserRouter. Envolver o app com BrowserRouter ou usar RouterProvider conforme a API escolhida.

- Duas opções válidas para rotas (não misturar BrowserRouter com RouterProvider):

  1) BrowserRouter + Routes (recomendado simples)
  - routes.tsx
  ```tsx
  // src/routes.tsx
  import { Routes, Route } from 'react-router-dom'
  import Home from './pages/Home'
  import Categories from './pages/Categories'

  const Rotas = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  )

  export default Rotas
  ```
  - App.tsx
  ```tsx
  // src/App.tsx
  import { BrowserRouter } from 'react-router-dom'
  import GlobalCSS from './styles/global'
  import Header from './components/Header'
  import Rotas from './routes'

  function App() {
    return (
      <BrowserRouter>
        <GlobalCSS />
        <Header />
        <Rotas />
      </BrowserRouter>
    )
  }

  export default App
  ```

  2) createBrowserRouter + RouterProvider (aplica-se quando usar data APIs do new router)
  - rotas.ts
  ```ts
  // src/rotas.ts
  import { createBrowserRouter } from 'react-router-dom'
  import Home from './pages/Home'
  import Categories from './pages/Categories'

  export const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/categories', element: <Categories /> },
  ])
  ```
  - App.tsx
  ```tsx
  // src/App.tsx
  import { RouterProvider } from 'react-router-dom'
  import { router } from './rotas'
  import GlobalCSS from './styles/global'
  import Header from './components/Header'

  function App() {
    return (
      <>
        <GlobalCSS />
        <Header />
        <RouterProvider router={router} />
      </>
    )
  }

  export default App
  ```
  - Observação: quando usar RouterProvider deixe o Header dentro do tree provisto pelo Router (Header pode ficar acima, mas então Links precisam ser compatíveis com a API escolhida).

- Boas práticas
  - Não calcular lógica de negócio complexa no presentation layer; deixar cálculos em models/serviços.
  - Fazer a renderização dinâmica via props/state (map sobre arrays).
  - Testar navegação após mover o Header para garantir que <Link> funcione.
  - Centralizar rotas em um arquivo facilita manutenção e lazy loading de pages.

## Aula 8 - Construa o rodapé

### Objetivos
* Criar pasta para o rodapé no projeto;
* Estilizar as cores e estruturar a altura do rodapé;
* Criar constante para configurar a data do ano e atualizar automaticamente;
* Criar links para o funcionamento dos botões.

### Anotações
Criação do component `footer`. Ele é composto por duas sections e a mensagem de direitos do site. 
Colocamos após o componente `Rotas`, porque assim como o header é um componente fixo no site. 
Seguimos o design do Figma para criação do footer, a única coisa que teve diferente nesse processo foi utiliar o javaScript para pegar o ano de forma automatica. Criamos a constante `currentYear = new Date().getFullYear` e passamos ela no texto do footer para que seja atualziado de forma automatica o valor. 