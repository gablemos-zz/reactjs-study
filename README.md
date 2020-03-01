# Módulo React
Conteúdo do bootcamp da Rocketseat GoStack

# Criando projeto ReactJS

``` yarn
yarn create react-app [nome-projeto]
```

# Exclua a configuração padrão do eslint

Em package.json remova:
``` js
"eslintConfig": {
  "extends": "react-app"
}
```

# Limpando o código inicial

Em public/index.html:
* Remover os comentários

* Remover (útil apenas para PWA)
``` html
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> 
```
* Deletar os arquivos em public/
  * manifest.json (útil apenas para PWA)
  * logoxxx.png

* Delatar os arquivos em src/
  * App.css
  * App.test.js
  * index.css
  * logo.svg
  * serviceWorker.js (útil apenas para PWA)
  * setupTests.js

* No arquivo src/index.js apagar os comentários e remover:
  * serviceWorker.unregister();
  * import * as serviceWorker from './serviceWorker';
  * import './index.css';

* No arquivo src/App.js remover:
  * import logo from './logo.svg';
  * import './App.css';
  * ``` html
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    ```

# Dependencias Style Guide

* Add .editorconfig (instale o plugin do vscode antes), depois botão direito e "Generate .editorconfig"
  * Mantenha o seguinte padrão:
  ```
  root = true

  [*]
  indent_style = space
  indent_size = 2
  end_of_line = lf
  charset = utf-8
  trim_trailing_whitespace = true
  insert_final_newline = true
  ```

* Add eslint
  ```
  yarn add eslint -D
  ```
* Start eslint
  ```
  yarn eslint --init
  ```
  > To check suntax, find problems, and enforce code style

  > JavaScript modules(import/export)

  > React

  > N ( for Does your project use TypeScript )

  > Browser

  > Use a popular style guide

  > Airbnb

  > JavaScript

  > Y ( for Would you like to install them now with npm? )
* Deletar package-lock.json
* Para atualizar o yarn.lock
  ```
  yarn
  ```
* Add prettier
  ```
  yarn add prettier -D
  ``` 
* Add config slint prettier
  ```
  yarn add eslint-config-prettier -D
  ``` 
* Add plugin eslint prettier
  ```
  yarn add eslint-plugin-prettier -D
  ``` 
* Add babel eslint 
  ```
  yarn add babel-eslint -D
  ``` 

# Configurando Style Guide

No arquivo .eslintec.js faça as seguintes configurações:

``` js
env: {
    browser: true,
    es6: true,
  }
```
``` js
extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ]
```
``` js
globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  }
```
``` js
parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  }
```
``` js
plugins: [
    'react',
    'prettier'
  ]
```
> **RULES:**

* Regras do prettier (para não precisar ter um arquivo separado)
  1. Obrigando uso de aspas simples
  2. Colocando virgula nos ultimos elementos de um json ou de um array
  3. Desligando uso de ; (ponto e virgula)
``` js
"prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "es5",
        "semi": false
      }
    ]
```
* Para que os arquivos com jsx possam ter extensão js também
``` js
"react/jsx-filename-extension":[
      "warn",
      { extensions: ['.jsx', '.js']}
    ]
```
* Para não exigir que todo export seja default
``` js
"import/prefer-default-export": "off"
```
* Para não obrigar o uso do this em métodos da própria classe
``` js
"class-methods-use-this": "off"
```
* 
``` js
"no-param-reassign": "off"
```
* Desligar a obrigatoriedade de camel case
``` js
"camelcase": "off"
```
* Ignorar as variaveis listadas, caso não sejam usadas
``` js
"no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "next"
      }
    ]
```
* Desligar uso de ; (ponto e virgula)
``` js
"semi": [2, "never"]
```
* Desligar a necessidade de criar o State dentro do construtor de um componente 
Class
``` js
'react/state-in-constructor': "off"
```
* Poder declarar propriedades staticas
``` js
'react/static-property-placement': "off"
```

# Erros que encontrei

* Obtive o erro devido a versão do babel-eslint que instalei estar superior a que
vem no create react-app, remover a dependencia também não resolveu. Apenas 
igualando as versões foi como resolvi o problema(10.0.3) e removendo o ^ antes 
da versão, para que não seja atualizada.