if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
		return (/\d/).test(str);
    },

    containsRepeatingLetter : function(str) {
		return (/([a-zA-Z])\1/);
    },

    endsWithVowel : function(str) {
		return (/[aeiouAEIOU]$/).test(str);
    },

    captureThreeNumbers : function(str) {
		var matches = ((/\d{3}/).exec(str));
		if(matches!=null)
			return matches[0];
		else
			return false;
    },

    matchesPattern : function(str) {
		return (/^\d{3}-\d{3}-\d{4}$/).test(str);
    },
    isUSD : function(str) {
		return (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/).test(str);
    }
  };
});
