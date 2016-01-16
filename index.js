
module.exports = curry;


(function (factory, global){
    if(typeof define === 'function' && define.amd){
        define(factory);
    }
    else if(typeof module === 'object' && typeof module.exports === 'object'){
        module.exports = factory();
    }
    else{
        global.curry = factory();
    }
})(function (){

	return function curry(fn){

		if(typeof fn !== 'function'){
			throw new Error('TypeError: expected a function');
		}
		
		return function(){

			var args = [];

			function wrapper(){
				
				args.push.apply(args, arguments);

				if(fn.length === args.length){
					return fn.apply(null, args);
				}

				return wrapper;
			}

			return wrapper.apply(null, arguments);
		};
	};
}, this);