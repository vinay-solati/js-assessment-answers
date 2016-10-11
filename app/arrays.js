if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
	return arr.indexOf(item);
    },

    sum : function(arr) {
		return arr.reduce(function(total,num){
				return total + num;});
    },

    remove : function(arr, item) {
		// return arr.splice(arr.indexOf(item),1);
		// return arr.slice(0,arr.indexOf(item)).concat(arr.slice(arr.indexOf(item)+1));
	var temp = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] !== item) {
        temp.push(arr[i]);
      }
    }

    return temp;
    },

    removeWithoutCopy : function(arr, item) {
    	var i;
	var len;
	for (i = 0, len = arr.length; i < len; i++) 	{
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      	}
    	}

    	return arr;
	},

    append : function(arr, item) {
	 arr.push(item);
	return arr;
    },

    truncate : function(arr) {
	arr.pop();
	return arr;
    },

    prepend : function(arr, item) {
	arr.unshift(item)
	return arr;
    },

    curtail : function(arr) {
	arr.shift();
	return arr;
    },

    concat : function(arr1, arr2) {
	return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
		arr.splice(index,0,item);
		return arr;
    },

    count : function(arr, item) {
var count = 0;		
for (var i=0;i<arr.length;i++)
	if(arr[i]===item)
		count++;
return count;
    },

    duplicates : function(arr) {
		var duplicates = {};
		var result = [];

		for(var i=0;i<arr.length;i++)
		{
if(duplicates[arr[i]])
	duplicates[arr[i]] ++;
 else
 	duplicates[arr[i]] = 1;
}

for (var i in duplicates)
{
if(duplicates[i]>1)
	result.push(i);
		}
		return result;		
    },

    square : function(arr) {
		for (var i=0;i<arr.length;i++)
			arr[i] = arr[i] * arr[i];
		return arr;
    },

    findAllOccurrences : function(arr, target) {
		var occurrences = [];
		var j;
		var i;
		for (i=0,j=0;i<arr.length;i++)
			if(arr[i]===target){
			occurrences[j] = i;j++;}
		return occurrences;
    }
  };
});
