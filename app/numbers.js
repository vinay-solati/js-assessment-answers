if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
		return (1 & (num >> (bit - 1)));
    },

    base10: function(str) {
		return parseInt(str,2);
    },

    convertToBinary: function(num) {

    },

    multiply: function(a, b) {
		return a*(float)b;
    }
  };
});

