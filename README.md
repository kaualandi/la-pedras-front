# WebBoilerplate

Projeto gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 14.2.10.

## Clonando para um novo projeto
```bash
git clone https://bitbucket.org/noclaftech/boilerplate-web-angular <nome-do-projeto>
```

## Servidor de dev

```bash
ng serve
```
E abra o navegador em [localhost:4200](http://localhost:4200). A aplicação irá recarregar automaticamente caso haja alguma alteração no código.

## Build

Para gerar uma build de produção.
```bash
npm run build:prod
```
Ou para gerar uma build de desenvolvimento.
```bash
npm run build
```
Os arquivos serão gerados na pasta `dist/`.

## Gerando componentes
```bash
ng generate component component-name
```
Para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Libs instaladas
- Angular Material
  - `ng add @angular/material`
- ngx-mask
  - `npm i ngx-mask`

## Links úteis
### Pacotes instalados
- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [ngx-mask](https://github.com/JsDaddy/ngx-mask)

### Outros
- [Charts](https://apexcharts.com/docs/angular-charts/)
- [Carrosel/Slides](https://swiperjs.com/angular)
- [Captcha](https://github.com/leNicDev/ng-hcaptcha#readme)
- [Scroll animado (ngx-scrollreveal)](https://tinesoft.github.io/ngx-scrollreveal/doc/index.html)
- [Scroll animado (AOS)](https://michalsnik.github.io/aos/)
- [Icones](https://fw2svg.kaualf.com/)

## Componentes compartilhados
Icones
```html
<icon [name]="menu"></icon>
```

Loading
```html
<loading></loading>
```

Loading da página
```html
<page-loading></page-loading>
```
Paginação de tabela
```html
<pagination (pageChange) [back] [next] [current] [total]></pagination>
```

## Estilização
Para criar novos estilos globais, como por exemplo, para botões, formulários, modais, etc, é preciso criar o arquivo `.scss` na pasta `src/styles`, por exemplo, `src/styles/_buttons.scss`. Após isso importe-o no arquivo `src/styles.scss` como: `@import 'styles/buttons';`. Não se esqueça do `_` no início do nome do arquivo.

As variáveis de estilização estão no arquivo `src/styles/_variables.scss`.

### Media screens
Para criar media screens use
```scss
@include media('<=tablet') { // > | < | <= | >=
  // Estilos aqui
}
```
Caso queira adicionar novos breakpoints use o arquivo `src/styles/_media.scss`.

Para mais informações, acesse a documentação do [Include Media](https://eduardoboucas.github.io/include-media).

## PWA
### Logos
Adicionar as logos corretamente coforme o `manifest.webmanifest`. Respeite as dimensões e substitua com as logos corretas que estão em `src/assets/icons`.

### Variáveis
As variáveis `name`, `short_name`, `theme_color` e `background_color` devem ser configuradas no arquivo `manifest.webmanifest`.

## Estrutura dos diretórios
Gere um arquivo de texto com a estrutura de diretórios 
```bash
npm run tree
```
