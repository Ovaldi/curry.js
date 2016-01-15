### Installation

for Node

```sh
$ npm install curry.js
```

for Browser

```html
<script type="text/javascript" src="path/to/curry.js"></script
```

### Example

```js
var curry = require('curry.js');

var fn = curry(function (a, b){
	console.log(a, b);
});

fn('c');

fn('x')('y');

fn()('o')()('k');
```