# @mamadoo/spacekiller

Removes all spaces from a string.

## Install

```
$ npm install @mamadoo/spacekiller
```

## Usage

```js
const spacekiller = require("@mamadoo/spacekiller");

spacekiller("So much space!");
//=> "Somuchspace!"

spacekiller(1337);
//=> Uncaught TypeError: spacekiller wants a string!
//    at spacekiller (<anonymous>:2:41)
//    at <anonymous>:1:1
```
