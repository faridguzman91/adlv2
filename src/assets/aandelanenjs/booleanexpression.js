/* eslint-disable prettier/prettier */
HOYT.namespace('utils').BooleanExpression = function(){
	
	function _evaluate(){
		var e = arguments[2];
		var m,n,a,b,r;
		//relational operators
		while(m = e.match(/(\!)?([\w\[\]\-\.]+?)(^|<>|<=|>=|<|>|==|!=|\^=|\*=|\$=|=)([\w\[\]\-\.]+)/)){//[\w\[\]-\.] is the same as [a-zA-Z0-9_] + "[]-." 
			a = Number(m[2]);
			b = Number(m[4]);
			r = false;
			switch(m[3]){
				case '<':
					r = a < b;
					break;
				case '>':
					r = a > b;
					break;
				case '<=':
					r = a <= b;
					break;
				case '>=':
					r = a >= b;
					break;
				case '==':
				case '=':
					r = m[2] == m[4];
					break;
				case '!=':
				case '<>':
					r = m[2] != m[4];
					break;
				case '^=':
					r = m[2].indexOf(m[4]) == 0;
					break;
				case '*=':
					r = m[2].indexOf(m[4]) > -1;
					break;
				case '$=':
					r = m[2].substr(-m[4].length) === m[4];
					break;
				case '^':
					r = Boolean(a ^ b);
					break;
			}
			n = Number(r);
			if(Boolean(m[1])) n = n ^ 1;
			e = e.replace(m[0], String(n));
		}

		//logical operators
		while(m = e.match(/(\d+)(\|\||&&)(\d+)/)){	
			a = Number(m[1]);
			b = Number(m[3]);
			r = false;
			switch(m[2]){
				case '||':
					r = a || b;
					if(r) e = '1';//stop loop in case of TRUE and OR
					break;
				case '&&':
					r = a && b;
					break;
			}
			e = e.replace(m[0], String(Number(r)));
		}
		n = Number(e)||0;//defaults to false
		if(Boolean(arguments[1])) n = n ^ 1;
		return String(n);
	}

	/*
	 *	context: variables support
	 *  {	uitbouw0  : 2,
	 *		indeling-1 : 3,
	 *		elektra[cb1]: 1
	 *	}
	 */
	return {
		evaluate : function(e, context){
			if(typeof e != 'string') return false;
			var o = {AND:'&&',OR:'||',XOR:'^',NOT:'!',EQ:'=',NE:'!=',LT:'<',GT:'>',LE:'<=',GE:'>='},//replace operators (case insensitive)
			k = [];
			for(var p in o)k.push(p);
			e = e.replace(new RegExp('\\b('+k.join('|')+')\\b','gi'), function(m){return o[m];});
			e = e.replace(/\s+/g, '');//remove whitespace		
			if(context != undefined){
				e = e.replace(/[\w\[\]\-\.]+/g, function(s){//replace context variables (case sensitive)
					if(context.hasOwnProperty(s))s = context[s];
					return s;
				});
			}	
			while(isNaN(Number(e))) e = e.replace(/(?:(\!)?\(|^)([^()]+)(?:\)|$)/, _evaluate);
			return Boolean(Number(e));
		}
	}
}();