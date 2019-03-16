# JavaScript Module Demo

This repository is a demo of JavaScript module. There is a good [Introduction to ES Modules](https://flaviocopes.com/es-modules/).

## Summary of ES Module

The ES Module is the standard modular mechanism added to ECMAScript, version ES2015, aka ES6. It is supported by most browsers today. It is an experiemental feature in Node.js.

## Preparation

To use module in an HTML file, you should use the `type="module"` when include a script.

```js
<script type="module" src="main.js" />
```

One important effect of using ES module is that modules are fetched using [CORS](https://flaviocopes.com/cors/). It means two things:

- you need an HTTP server to serve the js files.
- if the js file is imported from a different domain, it must have a valid CORS header that allows cross-site loading (like `Access-Control-Allow-Origin: *`).

## Exporting From a Module

To export a function or a const from a module, using the following syntax:

```js
// export a named function
export function loadJson() {//...}

// default (with or without a function name)
export default e => {...}

// export a value
export const url = 'https://jsonplaceholder.typicode.com/users'
```

## Importing to a Module

Follwoing are examples of importing funcitons/values from modules.

```js
import { url } from './config.js'
import { loadJson } from './lib.js'
import { printUsers } from './print.js'
import showError from './print.js'
```
