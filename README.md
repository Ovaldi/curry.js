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