if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
		return fn.apply(this,arr);
    },

    speak : function(fn, obj) {
		return fn.call(obj);
    },

    functionFunction : function(str) {
		var greet = function (str1){
			return str + ", " + str1;
		}
		return greet;
    },

    makeClosures : function(arr, fn) {

    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {
	var paramenterCount = arguments.length;	
	var sum = 0;
	for(var i=0;i<paramenterCount;i++)
		sum = sum + arguments[i];
	return sum;
    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
